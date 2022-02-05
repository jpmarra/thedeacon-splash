// Anonymous "self-invoking" function
(function () {
    // Load the script
    var script = document.createElement("SCRIPT");
    script.src = "https://code.jquery.com/jquery-3.3.1.min.js";

    script.onload = function () {
        var $ = window.jQuery;

        // ***********************************
        // pollyfills
        // ***********************************

        Number.isInteger =
            Number.isInteger ||
            function (value) {
                return (
                    typeof value === "number" &&
                    isFinite(value) &&
                    Math.floor(value) === value
                );
            };

        // ***********************************
        // define TripleSeat namespace/object
        // ***********************************
        var TripleSeat = {
            FeatureSupport: function () {
                var feature = {};

                function checkInputSupport(type) {
                    // check if html5 input types (e.g. [date] or [time]) are supported
                    var inputElement = document.createElement("input");
                    inputElement.setAttribute("type", type);
                    return inputElement.type == type;
                }

                function CheckTimeInputStep() {
                    // check if html5 input types[time] stepUp/stepDown methods are supported
                    var inputElement = document.createElement("input");
                    inputElement.setAttribute("type", "time");
                    inputElement.setAttribute("step", 900);
                    inputElement.value = "00:01";
                    try {
                        inputElement.stepDown();
                        return inputElement.value == "00:00";
                    } catch (e) {
                        return false;
                    }
                }

                function checkFormValidation() {
                    // check if html5 form validation is supported
                    var inputElement = document.createElement("input");
                    return typeof inputElement.checkValidity == "function";
                }

                feature.DateInput = checkInputSupport("date");

                feature.TimeInput = checkInputSupport("time");

                feature.TimeInputStep = CheckTimeInputStep();

                feature.FormValidation = checkFormValidation();

                return feature;
            },

            Utils: {
                roundTimeInput: function (timeInputElement) {
                    // get minutes by extracting last two characters of input[type=time]'s value
                    var minutes = timeInputElement.value.slice(-2);

                    minutes = parseInt(minutes);

                    // calculate minutes rounded to nearest 15 minute interval
                    var roundedMinutes = Math.round(minutes / 15) * 15;

                    // use stepDown/stepUp to make input value equal to rounded value
                    if (roundedMinutes < minutes) {
                        timeInputElement.stepDown();
                    } else {
                        timeInputElement.stepUp();
                    }
                },

                validateTime: function (timeString) {
                    // make sure timeString is formatted hh:mm
                    return /^(?:[01]\d|2[0-3]):(?:[0-5]\d)$/.test(timeString);
                },

                parseTime: function (timeString) {
                    // accept string representing 24 hour time; validate format, and if it passes, return
                    // array containing hours and minutes as integers

                    if (TripleSeat.Utils.validateTime(timeString)) {
                        // split string on the ":" separator to get hours and minutes, and parse into integers
                        timeValue = timeString.split(":");
                        timeValue[0] = parseInt(timeValue[0]);
                        timeValue[1] = parseInt(timeValue[1]);

                        return timeValue;
                    }

                    return false;
                },

                roundTime: function (timeString) {
                    var timeValue = TripleSeat.Utils.parseTime(timeString);

                    if (timeValue) {
                        var hours = timeValue[0];
                        var minutes = timeValue[1];

                        // round minutes to nearest 15
                        minutes = Math.round(minutes / 15) * 15;

                        // make adjustments for rounding up to non-valid values
                        if (minutes === 60) {
                            minutes = 0;
                            hours++;
                            if (hours === 24) {
                                hours = 0;
                            }
                        }

                        // convert numbers into 24-hour formatted string
                        minutes = minutes < 10 ? "0" + minutes : minutes;
                        hours = hours < 10 ? "0" + hours : hours;
                        timeString = hours + ":" + minutes;

                        return timeString;
                    }

                    return false;
                },

                convertToMinutes: function (timeString) {
                    var timeArray = TripleSeat.Utils.parseTime(timeString);

                    if (timeArray) {
                        var minutes = timeArray[0] * 60 + timeArray[1];
                        return minutes;
                    }

                    return false;
                },

                calculateTimeDifference: function (startTime, endTime) {
                    // take two time strings in iso 24-hour format (e.g. 13:45); return duration as phrase
                    // (e.g., 1 hour 30 minutes) or empty string if either time string cannot be parsed

                    // convert both time strings into minutes
                    startTime = TripleSeat.Utils.convertToMinutes(startTime);
                    endTime = TripleSeat.Utils.convertToMinutes(endTime);

                    if (startTime && endTime) {
                        var duration = endTime - startTime;

                        // round duration to nearest 15 minute interval
                        duration = Math.round(duration / 15) * 15;

                        // if duration is negative, it's because party spans midnight, and goes into next day
                        // so add one day's worth of minutes, i.e., 24 hours * 60 minutes per hour
                        duration = duration < 0 ? duration + 24 * 60 : duration;

                        // calculate hours
                        var hours = Math.floor(duration / 60);

                        // format hours for display on page
                        if (hours === 0) {
                            hours = "";
                        } else if (hours === 1) {
                            hours = "1 hour ";
                        } else {
                            hours = hours + " hours ";
                        }

                        // calculate minutes
                        var minutes = duration % 60;

                        // format minutes for display on page
                        minutes = minutes === 0 ? "" : minutes + " minutes";

                        return hours + minutes;
                    }
                },

                dateObjectToString: function (dateObject) {
                    var dd = dateObject.getDate();
                    dd = dd < 10 ? "0" + dd : dd;

                    var mm = dateObject.getMonth() + 1; // 0 is January, so we must add 1
                    mm = mm < 10 ? "0" + mm : mm;

                    var yyyy = dateObject.getFullYear();

                    return yyyy + "-" + mm + "-" + dd;
                },
            },

            HtmlUtils: {
                getQueryString: function () {
                    var queryString = $("#triple-seat-script").attr("src");

                    queryString = queryString.slice(
                        queryString.indexOf("?") + 1
                    );

                    return queryString;
                },

                outputPartyDuration: function () {
                    // get string representing start and end times from form inputs
                    var startTime = $('[name="lead[start_time]"]').val();
                    var endTime = $('[name="lead[end_time]"]').val();

                    // get duration from Tripleseat Util function
                    var duration = TripleSeat.Utils.calculateTimeDifference(
                        startTime,
                        endTime
                    );

                    // show duration in form next to inputs for start and end time
                    $('output[for~="start_time"][for~="end_time"]').val(
                        duration
                    );
                },

                showFormErrors: function (formErrors) {
                    var errorList = $("<ul />");

                    $.each(formErrors, function (field, messages) {
                        if (field == "Base") {
                            // silly rails default field
                            field = "";
                        }
                        $.each(messages, function (i, error) {
                            $("<li />")
                                .text(field + " " + error)
                                .appendTo(errorList);
                        });
                    });

                    $("#triple-seat-container").addClass("tripleSeatError");

                    $("#triple-seat-container > .formSubmissionInfo")
                        .empty()
                        .append(
                            "<h1>Some information is missing or has errors</h1><p>Please fix the following:</p>"
                        )
                        .append(errorList);

                    TripleSeat.HtmlUtils.scrollToMessage();
                },

                showSuccessMsg: function (msg) {
                    $("#triple-seat-container").removeClass("tripleSeatError");
                    $("#triple-seat-container > .formSubmissionInfo")
                        .empty()
                        .append("<h1>Request received</h1><p>" + msg + "</p>");
                    $("#triple-seat-container > form.tripleSeat").remove();

                    TripleSeat.HtmlUtils.scrollToMessage();
                },

                scrollToMessage: function () {
                    $("html, body").animate(
                        {
                            scrollTop: $(
                                "#triple-seat-container > .formSubmissionInfo"
                            ).offset().top,
                        },
                        200
                    );
                },

                zoomOut: function () {
                    var viewport = $("meta[name='viewport']");
                    var original = viewport.attr("content");
                    force_scale = original + ", maximum-scale=1";
                    viewport.attr("content", force_scale);
                    setTimeout(function () {
                        viewport.attr("content", original);
                    }, 1);
                },
            },
        };

        var Html5Feature = TripleSeat.FeatureSupport();

        $(document).ready(function () {
            // create Config object with values from calling html page; if a value is missing, use sensible default values
            var Config = {
                StartTime: {
                    min: (function () {
                        if (
                            typeof window.start_time_min !== "undefined" &&
                            TripleSeat.Utils.validateTime(window.start_time_min)
                        ) {
                            return TripleSeat.Utils.roundTime(
                                window.start_time_min
                            );
                        }
                        return "00:00";
                    })(),

                    max: (function () {
                        if (
                            typeof window.start_time_max !== "undefined" &&
                            TripleSeat.Utils.validateTime(window.start_time_max)
                        ) {
                            return TripleSeat.Utils.roundTime(
                                window.start_time_max
                            );
                        }
                        return "23:45";
                    })(),

                    val: (function () {
                        if (
                            typeof window.start_time_default !== "undefined" &&
                            TripleSeat.Utils.validateTime(
                                window.start_time_default
                            )
                        ) {
                            return window.start_time_default;
                        }
                        return "18:00";
                    })(),
                },

                EndTime: {
                    min: (function () {
                        if (
                            typeof window.end_time_min !== "undefined" &&
                            TripleSeat.Utils.parseTime(window.end_time_min)
                        ) {
                            return window.end_time_min;
                        }
                        return "00:00";
                    })(),

                    max: (function () {
                        if (
                            typeof window.end_time_max !== "undefined" &&
                            TripleSeat.Utils.parseTime(window.end_time_max)
                        ) {
                            return window.end_time_max;
                        }
                        return "23:45";
                    })(),

                    val: (function () {
                        if (
                            typeof window.end_time_default !== "undefined" &&
                            TripleSeat.Utils.parseTime(window.end_time_default)
                        ) {
                            return window.end_time_default;
                        }
                        return "21:00";
                    })(),
                },

                EventDate: {
                    min: (function () {
                        if (
                            typeof window.date_min !== "undefined" &&
                            Number.isInteger(window.date_min) &&
                            window.date_min >= 0
                        ) {
                            var targetDate = new Date();
                            targetDate.setDate(
                                targetDate.getDate() + window.date_min
                            );
                            return targetDate;
                        }
                        return new Date();
                    })(),

                    max: (function () {
                        var dateAdjustment;
                        if (
                            typeof window.date_max !== "undefined" &&
                            Number.isInteger(window.date_max) &&
                            window.date_max >= 0
                        ) {
                            dateAdjustment = window.date_max;
                        } else {
                            dateAdjustment = 365;
                        }
                        var targetDate = new Date();
                        targetDate.setDate(targetDate.getDate() + 365);
                        return targetDate;
                    })(),

                    val: (function () {
                        if (
                            typeof window.date_default !== "undefined" &&
                            Number.isInteger(window.date_default)
                        ) {
                            var targetDate = new Date();
                            targetDate.setDate(
                                targetDate.getDate() + window.date_default
                            );
                            return targetDate;
                        }
                        return new Date();
                    })(),
                },

                GuestCount: {
                    min: (function () {
                        if (
                            typeof window.guest_count_min !== "undefined" &&
                            Number.isInteger(window.guest_count_min) &&
                            window.guest_count_min > 0
                        ) {
                            return window.guest_count_min;
                        }
                        return 1;
                    })(),
                    max: (function () {
                        if (
                            typeof window.guest_count_max !== "undefined" &&
                            Number.isInteger(window.guest_count_max)
                        ) {
                            return window.guest_count_max;
                        }
                        return 1000;
                    })(),
                    val: (function () {
                        if (
                            typeof window.guest_count_default !== "undefined" &&
                            Number.isInteger(window.guest_count_default)
                        ) {
                            return window.guest_count_default;
                        }
                        return 0;
                    })(),
                },
            };

            // do some sanity checking on Config, to prevent e.g. a max date being less than a min date

            if (
                Config.StartTime.val < Config.StartTime.min ||
                Config.StartTime.val > Config.StartTime.max
            ) {
                Config.StartTime.val = false;
            }
            if (Config.StartTime.max < Config.StartTime.min) {
                Config.StartTime.max = "23:45";
            }

            if (
                Config.EndTime.val < Config.EndTime.min ||
                Config.EndTime.val > Config.EndTime.max
            ) {
                Config.EndTime.val = false;
            }
            if (Config.EndTime.min < Config.StartTime.min) {
                Config.EndTime.min = Config.StartTime.min;
            }
            if (Config.EndTime.max < Config.EndTime.min) {
                Config.EndTime.max = "23:45";
            }

            if (
                Config.EventDate.val < Config.EventDate.min ||
                Config.EventDate.val > Config.EventDate.max
            ) {
                Config.EventDate.val = false;
            }
            if (Config.EventDate.max < Config.EventDate.min) {
                Config.EventDate.max = 365;
            }

            if (
                Config.GuestCount.val < Config.GuestCount.min ||
                Config.GuestCount.val > Config.GuestCount.max
            ) {
                Config.GuestCount.val = false;
            }
            if (Config.GuestCount.max < Config.GuestCount.min) {
                Config.GuestCount.max = 1000;
            }

            // add .tripleSeat form <style> element to <head>
            $("<style />")
                .text(
                    '\
			.tripleSeat > fieldset > p > label > .sizeUp { font-size: 16px; }\
			#triple-seat-container { max-width: 35em; }\
			.tripleSeat > fieldset, .tripleSeat > button { margin-top: 1em; }\
			.tripleSeat > fieldset > p > label { display: inline-block; }\
			.tripleSeat > fieldset > p > label.textarea { display: inline; }\
			.tripleSeat > fieldset > p > label > input[type="number"] { width: 11.5em; }\
			.multipleInput > label { margin-right: 1em; vertical-align: bottom; }\
			.tripleSeat > fieldset > p > label > input, .tripleSeat > fieldset > p > label > select, .tripleSeat > fieldset > p > label > textarea { display: block; }\
			.tripleSeat > fieldset > p > label > input, .tripleSeat > fieldset > p > label > textarea { width: 100%; max-width: 95%; }\
			.tripleSeat > fieldset > p > output { display: inline-block; white-space: nowrap; min-width: 9em; opacity: 0; }\
			#triple-seat-container > .formSubmissionInfo > h1 { font-size: 110%; }\
			.tripleSeatError > .formSubmissionInfo { border: 2px groove #ed1c24; padding: 0 .5em; .5em .5em; margin-bottom: 2em; }\
			.tripleSeatError > .formSubmissionInfo, .tripleSeatError > form > fieldset > p > label > :invalid { color: black; background-color: #ffeedd; }\
			.tripleSeatError > h1 { color: #ed1c24; background-color: #ffeedd }\
			.safari { display: none; }\
			'
                )
                .appendTo("head");

            // if there's no element class=tripleSeatContainer, create one at the point where the script is
            if (
                $("#triple-seat-container").length === 0 &&
                $("#triple-seat-script").parents("body").length > 0
            ) {
                $("#triple-seat-script").after(
                    '<div id="triple-seat-container" />'
                );
            }

            // add form with all elements except time elements

            $("#triple-seat-container").append(
                '<section class="formSubmissionInfo"></section><form class="tripleSeat" method="post"><input type="hidden" name="lead[campaign_source]" id="lead_campaign_source"><input type="hidden" name="lead[campaign_medium]" id="lead_campaign_medium"><input type="hidden" name="lead[campaign_name]" id="lead_campaign_name"><input type="hidden" name="lead[campaign_term]" id="lead_campaign_term"><input type="hidden" name="lead[campaign_content]" id="lead_campaign_content"><fieldset><legend>Your contact information</legend><p class="multipleInput"><label>First name <input required name="lead[first_name]" autocomplete="given-name"></label> <label>Last name <input required name="lead[last_name]" maxlength="50" autocomplete="family-name"></label></p><p><label>Email address <input required type="email" name="lead[email_address]" size="40" autocomplete="email"></label></p><p class="multipleInput"><label>Phone number <input type="tel" name="lead[phone_number]" size="16" autocomplete="tel-national"></label> <label><abbr title="extension">Ext.</abbr> <input type="tel" name="lead[phone_number_extension]" size="7" autocomplete="tel-extension"></label></p><p><label>Company <input name="lead[company]" autocomplete="organization"></label></p></fieldset><fieldset><legend>Your event details</legend><p><label>Nature of this event (e.g., birthday party or business dinner) <input name="lead[event_description]" size="68"></label></p><p><label>Event date <input required type="date" name="lead[event_date]"></label></p><p class="multipleInput"><label class="startTimeFieldContainer">Start time </label> <label class="endTimeFieldContainer">End time </label> <output for="start_time end_time"></output></p><p><label>Number of people <input required type="number" name="lead[guest_count]" min="1"></label></p><p><label class="textarea">Is there any additional information you would like to add? <textarea class="sizeUp" name="lead[additional_information]" rows="4" cols="30"></textarea></label></p></fieldset><button class="tripleSeatSubmit">Submit</button><div><button class="safari"></button></div></form>'
            );

            $(
                ".tripleSeat > fieldset > p > label > input, .tripleSeat > fieldset > p > label > textarea"
            ).each(function () {
                var elementFontSize = $(this).css("font-size");
                elementFontSize = parseFloat(elementFontSize);

                if (elementFontSize < 16) {
                    $(this).addClass("sizeUp");
                }
            });

            // get query string from tripleseat.js and add it to form action attribute;
            // also add additional hidden input elements based on query string

            var elementFontSize,
                tripleSeatQueryString,
                queryStringName,
                queryStringValue;

            tripleSeatQueryString = TripleSeat.HtmlUtils.getQueryString();

            $("form.tripleSeat").attr({
                action:
                    "https://api.tripleseat.com/v1/leads/create.js?" +
                    tripleSeatQueryString.replace(/&/g, "&amp;"),
            });

            tripleSeatQueryString = tripleSeatQueryString.split("&");

            for (var i = 0, j = tripleSeatQueryString.length; i < j; i++) {
                queryStringName = tripleSeatQueryString[i].slice(
                    0,
                    tripleSeatQueryString[i].indexOf("=")
                );
                queryStringValue = tripleSeatQueryString[i].slice(
                    tripleSeatQueryString[i].indexOf("=") + 1
                );

                $("<input>")
                    .attr({
                        name: queryStringName,
                        value: queryStringValue,
                        type: "hidden",
                    })
                    .prependTo("form.tripleSeat");
            }

            // *********************************************************************************
            // time element:
            // if type[time] is supported, add input[type=time], otherwise add select element
            // *********************************************************************************

            if (Html5Feature.TimeInput) {
                // add two <input type=time> elements, one for start time, one for end time
                $(".startTimeFieldContainer").append(
                    '<input id="start_time" name="lead[start_time]" required type="time" step="900">'
                );
                $(".endTimeFieldContainer").append(
                    '<input id="end_time" name="lead[end_time]" required type="time" step="900">'
                );

                // set min and max attributes for start time and end time input elements
                if (Config.StartTime.min !== "00:00") {
                    $('.startTimeFieldContainer > input[type="time"]').attr(
                        "min",
                        Config.StartTime.min
                    );
                }
                if (Config.StartTime.max !== "23:45") {
                    $('.startTimeFieldContainer > input[type="time"]').attr(
                        "max",
                        Config.StartTime.max
                    );
                }

                if (Config.EndTime.min !== "00:00") {
                    $('.endTimeFieldContainer > input[type="time"]').attr(
                        "min",
                        Config.EndTime.min
                    );
                }
                if (Config.EndTime.max !== "23:45") {
                    $('.endTimeFieldContainer > input[type="time"]').attr(
                        "max",
                        Config.EndTime.max
                    );
                }

                // when any <input type=time> loses focus, make sure it's rounded to nearest quarter hour
                // (don't do this on change, as it makes it hard to type in a value; instead, use blur)
                $(
                    '.startTimeFieldContainer > input[type="time"], .endTimeFieldContainer > input[type="time"]'
                ).blur(function () {
                    if (
                        this.validity.stepMismatch &&
                        !this.validity.rangeUnderflow &&
                        !this.validity.rangeOverflow
                    ) {
                        if (Html5Feature.TimeInputStep) {
                            TripleSeat.Utils.roundTimeInput(this);
                            console.log("step support");
                        } else {
                            this.value = TripleSeat.Utils.roundTime(this.value);
                            console.log("no step support");
                        }
                    }
                });
            } else {
                // create <select> elements to use instead of input[type=time]
                var selectElementStartTime = $(
                    '<select id="start_time" name="lead[start_time]" />'
                );
                var selectElementEndTime = $(
                    '<select id="end_time" name="lead[end_time]" />'
                );

                var hours,
                    minutes,
                    hoursPadded,
                    minutesPadded,
                    hours12Formatted,
                    ampm,
                    formattedTime;

                // use nested for loops to create a list of times
                for (hours = 0; hours < 24; hours++) {
                    hoursPadded = hours < 10 ? "0" + hours : hours;

                    ampm = hours < 12 ? " AM" : " PM";

                    if (hours === 0) {
                        hours12Formatted = 12;
                    } else if (hours > 12) {
                        hours12Formatted = hours - 12;
                    } else {
                        hours12Formatted = hours;
                    }

                    for (minutes = 0; minutes <= 45; minutes += 15) {
                        minutesPadded = minutes < 10 ? "0" + minutes : minutes;

                        formattedTime = hoursPadded + ":" + minutesPadded;

                        if (
                            formattedTime >= Config.StartTime.min &&
                            formattedTime <= Config.StartTime.max
                        ) {
                            // create <option> elements and append them to <select> variable
                            $("<option />")
                                .attr({
                                    value: hoursPadded + ":" + minutesPadded,
                                })
                                .text(
                                    hours12Formatted +
                                        ":" +
                                        minutesPadded +
                                        ampm
                                )
                                .appendTo(selectElementStartTime);
                        }

                        if (
                            formattedTime >= Config.EndTime.min &&
                            formattedTime <= Config.EndTime.max
                        ) {
                            // create <option> elements and append them to <select> variable
                            $("<option />")
                                .attr({
                                    value: hoursPadded + ":" + minutesPadded,
                                })
                                .text(
                                    hours12Formatted +
                                        ":" +
                                        minutesPadded +
                                        ampm
                                )
                                .appendTo(selectElementEndTime);
                        }
                    }
                }

                // add <select> element twice to DOM, once for start time and once for end time
                $(".startTimeFieldContainer").append(selectElementStartTime);
                $(".endTimeFieldContainer").append(selectElementEndTime);
            }

            // set default values for start and end time elements
            if (Config.StartTime.val) {
                $('[name="lead[start_time]"]').val(Config.StartTime.val);
            }
            if (Config.EndTime.val) {
                $('[name="lead[end_time]"]').val(Config.EndTime.val);
            }

            // initialize party duration calculation on page load
            TripleSeat.HtmlUtils.outputPartyDuration();

            // recalculate party duration each time user changes start or end time
            $('[name="lead[start_time]"], [name="lead[end_time]"]').change(
                function () {
                    TripleSeat.HtmlUtils.outputPartyDuration();
                }
            );

            // show <output> for party duration when users focuses on time input/select;
            // use opacity, not fadeIn/fadeOut, so that <output> element doesn't collapse/expand
            // and cause page to shift
            $('[name="lead[start_time]"], [name="lead[end_time]"]').focus(
                function () {
                    $('output[for~="start_time"][for~="end_time"]').animate(
                        { opacity: 1 },
                        100
                    );
                }
            );

            // hide <output> for party duration when users leaves time input/select elements;
            // use opacity, not fadeIn/fadeOut, so that <output> element doesn't collapse/expand
            // and cause page to shift;
            // make sure, on leaving one time element, that user is not focused on other time element
            $('[name="lead[start_time]"], [name="lead[end_time]"]').blur(
                function () {
                    window.setTimeout(function () {
                        if (
                            !$('[name="lead[start_time]"]').is(":focus") &&
                            !$('[name="lead[end_time]"]').is(":focus")
                        ) {
                            $(
                                'output[for~="start_time"][for~="end_time"]'
                            ).animate({ opacity: 0 }, 800);
                        }
                    });
                }
            );

            // ***********************************************
            // number of guests
            // ***********************************************

            $('input[type="number"][name="lead[guest_count]"]').attr({
                min: Config.GuestCount.min,
                max: Config.GuestCount.max,
            });

            if (Config.GuestCount.val) {
                $('input[type="number"][name="lead[guest_count]"]').val(
                    Config.GuestCount.val
                );
            }

            // ***********************************************
            // datefield: modify input[type=date] to aid user
            // ***********************************************

            if (Html5Feature.DateInput) {
                // if input[type=date] is supported, add min, max, and value attributes to help user

                $('[name="lead[event_date]"]').attr({
                    min: TripleSeat.Utils.dateObjectToString(
                        Config.EventDate.min
                    ),
                    max: TripleSeat.Utils.dateObjectToString(
                        Config.EventDate.max
                    ),
                });

                if (Config.EventDate.val) {
                    $('[name="lead[event_date]"]').val(
                        TripleSeat.Utils.dateObjectToString(
                            Config.EventDate.val
                        )
                    );
                }

                $('[name="lead[event_date]"]').change(function () {
                    if (this.validity.rangeUnderflow) {
                        this.setCustomValidity(
                            "The event date you have chosen is too early."
                        );
                    } else if (this.validity.rangeOverflow) {
                        this.setCustomValidity(
                            "The event date you have chosen is too far in the future."
                        );
                    } else {
                        this.setCustomValidity("");
                    }
                });
            } else {
                // if input[type=date] is not supported, add jquery datepicker

                // get jquery-ui.css by adding a <link> to <head>
                $("head").append(
                    '<link rel="stylesheet" href="https://ajax.googleapis.com/ajax/libs/jqueryui/1.12.1/themes/smoothness/jquery-ui.css">'
                );

                $('[name="lead[event_date]"]').attr({
                    size: 10,
                    minlength: 10,
                    maxlength: 10,
                });

                // get jquery-ui javascript
                $.ajax({
                    url: "https://ajax.googleapis.com/ajax/libs/jqueryui/1.12.1/jquery-ui.min.js",
                    dataType: "script",
                    success: function () {
                        // jquery ui is now loaded

                        // remove name attribute from visible element that uses m/d/yyyy format (this will not be submitted);
                        // add hidden input with name attribute to submit date in yyyy-mm-dd format;
                        $('[name="lead[event_date]"]')
                            .removeAttr("name")
                            .parent()
                            .after(
                                '<input type="hidden" name="lead[event_date]">'
                            );

                        // finally, add datepicker
                        $('.tripleSeat input[type="date"]')
                            .datepicker({
                                minDate: Config.EventDate.min,
                                maxDate: Config.EventDate.max,
                                dateFormat: "m/d/yy",
                                altFormat: "yy-mm-dd",
                                altField: '[name="lead[event_date]"]',
                                changeMonth: true,
                                changeYear: true,
                            })
                            .datepicker("setDate", Config.EventDate.val);
                    },
                });
            }

            $(".tripleSeatSubmit").click(function () {
                // a hack to get Safari to show error bubbles when a field fails
                // html5 constraint validation
                // there's a second, hidden, submit button; by clicking it programmatically
                // after the user clicks the visible button, safari will show the error
                // bubble after scrolling the problem field into view
                setTimeout(function () {
                    $(".tripleSeat > div > button.safari").click();
                }, 1);
            });

            $("form.tripleSeat").submit(function (evt) {
                $("form.tripleSeat > button").prop("disabled", true);
                TripleSeat.HtmlUtils.zoomOut();
                $.ajax({
                    url: $(this).attr("action"),
                    data: $(this).serialize(),
                    crossDomain: true,
                    dataType: "jsonp",
                    success: function (data) {
                        if (data.errors != undefined) {
                            TripleSeat.HtmlUtils.showFormErrors(data.errors);
                        } else {
                            TripleSeat.HtmlUtils.showSuccessMsg(
                                data.success_message
                            );
                        }
                    },
                    complete: function () {
                        $("form.tripleSeat > button").prop("disabled", false);
                    },
                });
                evt.preventDefault();
            });
        }); // end document.ready function
    }; // script.onload function

    document.getElementsByTagName("head")[0].appendChild(script);
})();
