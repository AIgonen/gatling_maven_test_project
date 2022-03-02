var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "1954",
        "ok": "1617",
        "ko": "337"
    },
    "minResponseTime": {
        "total": "166",
        "ok": "166",
        "ko": "7494"
    },
    "maxResponseTime": {
        "total": "20795",
        "ok": "17477",
        "ko": "20795"
    },
    "meanResponseTime": {
        "total": "5268",
        "ok": "2254",
        "ko": "19725"
    },
    "standardDeviation": {
        "total": "7118",
        "ok": "2761",
        "ko": "2144"
    },
    "percentiles1": {
        "total": "1459",
        "ok": "1373",
        "ko": "20172"
    },
    "percentiles2": {
        "total": "6434",
        "ok": "1871",
        "ko": "20290"
    },
    "percentiles3": {
        "total": "20264",
        "ok": "10348",
        "ko": "20493"
    },
    "percentiles4": {
        "total": "20484",
        "ok": "11392",
        "ko": "20669"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 77,
    "percentage": 4
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 419,
    "percentage": 21
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 1121,
    "percentage": 57
},
    "group4": {
    "name": "failed",
    "count": 337,
    "percentage": 17
},
    "meanNumberOfRequestsPerSecond": {
        "total": "57.471",
        "ok": "47.559",
        "ko": "9.912"
    }
},
contents: {
"req_get-user-reques-a4fef": {
        type: "REQUEST",
        name: "get user request",
path: "get user request",
pathFormatted: "req_get-user-reques-a4fef",
stats: {
    "name": "get user request",
    "numberOfRequests": {
        "total": "1000",
        "ok": "954",
        "ko": "46"
    },
    "minResponseTime": {
        "total": "508",
        "ok": "508",
        "ko": "20090"
    },
    "maxResponseTime": {
        "total": "20795",
        "ok": "13191",
        "ko": "20795"
    },
    "meanResponseTime": {
        "total": "2374",
        "ok": "1505",
        "ko": "20384"
    },
    "standardDeviation": {
        "total": "4248",
        "ok": "1586",
        "ko": "198"
    },
    "percentiles1": {
        "total": "1250",
        "ok": "1239",
        "ko": "20358"
    },
    "percentiles2": {
        "total": "1392",
        "ok": "1378",
        "ko": "20538"
    },
    "percentiles3": {
        "total": "10721",
        "ok": "2592",
        "ko": "20686"
    },
    "percentiles4": {
        "total": "20576",
        "ok": "10573",
        "ko": "20751"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 58,
    "percentage": 6
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 364,
    "percentage": 36
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 532,
    "percentage": 53
},
    "group4": {
    "name": "failed",
    "count": 46,
    "percentage": 5
},
    "meanNumberOfRequestsPerSecond": {
        "total": "29.412",
        "ok": "28.059",
        "ko": "1.353"
    }
}
    },"req_get-user-reques-70c35": {
        type: "REQUEST",
        name: "get user request Redirect 1",
path: "get user request Redirect 1",
pathFormatted: "req_get-user-reques-70c35",
stats: {
    "name": "get user request Redirect 1",
    "numberOfRequests": {
        "total": "954",
        "ok": "663",
        "ko": "291"
    },
    "minResponseTime": {
        "total": "166",
        "ok": "166",
        "ko": "7494"
    },
    "maxResponseTime": {
        "total": "20668",
        "ok": "17477",
        "ko": "20668"
    },
    "meanResponseTime": {
        "total": "8301",
        "ok": "3333",
        "ko": "19621"
    },
    "standardDeviation": {
        "total": "8178",
        "ok": "3606",
        "ko": "2289"
    },
    "percentiles1": {
        "total": "2085",
        "ok": "1877",
        "ko": "20156"
    },
    "percentiles2": {
        "total": "20053",
        "ok": "2198",
        "ko": "20262"
    },
    "percentiles3": {
        "total": "20307",
        "ok": "10475",
        "ko": "20433"
    },
    "percentiles4": {
        "total": "20459",
        "ok": "17216",
        "ko": "20490"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 19,
    "percentage": 2
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 55,
    "percentage": 6
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 589,
    "percentage": 62
},
    "group4": {
    "name": "failed",
    "count": 291,
    "percentage": 31
},
    "meanNumberOfRequestsPerSecond": {
        "total": "28.059",
        "ok": "19.5",
        "ko": "8.559"
    }
}
    }
}

}

function fillStats(stat){
    $("#numberOfRequests").append(stat.numberOfRequests.total);
    $("#numberOfRequestsOK").append(stat.numberOfRequests.ok);
    $("#numberOfRequestsKO").append(stat.numberOfRequests.ko);

    $("#minResponseTime").append(stat.minResponseTime.total);
    $("#minResponseTimeOK").append(stat.minResponseTime.ok);
    $("#minResponseTimeKO").append(stat.minResponseTime.ko);

    $("#maxResponseTime").append(stat.maxResponseTime.total);
    $("#maxResponseTimeOK").append(stat.maxResponseTime.ok);
    $("#maxResponseTimeKO").append(stat.maxResponseTime.ko);

    $("#meanResponseTime").append(stat.meanResponseTime.total);
    $("#meanResponseTimeOK").append(stat.meanResponseTime.ok);
    $("#meanResponseTimeKO").append(stat.meanResponseTime.ko);

    $("#standardDeviation").append(stat.standardDeviation.total);
    $("#standardDeviationOK").append(stat.standardDeviation.ok);
    $("#standardDeviationKO").append(stat.standardDeviation.ko);

    $("#percentiles1").append(stat.percentiles1.total);
    $("#percentiles1OK").append(stat.percentiles1.ok);
    $("#percentiles1KO").append(stat.percentiles1.ko);

    $("#percentiles2").append(stat.percentiles2.total);
    $("#percentiles2OK").append(stat.percentiles2.ok);
    $("#percentiles2KO").append(stat.percentiles2.ko);

    $("#percentiles3").append(stat.percentiles3.total);
    $("#percentiles3OK").append(stat.percentiles3.ok);
    $("#percentiles3KO").append(stat.percentiles3.ko);

    $("#percentiles4").append(stat.percentiles4.total);
    $("#percentiles4OK").append(stat.percentiles4.ok);
    $("#percentiles4KO").append(stat.percentiles4.ko);

    $("#meanNumberOfRequestsPerSecond").append(stat.meanNumberOfRequestsPerSecond.total);
    $("#meanNumberOfRequestsPerSecondOK").append(stat.meanNumberOfRequestsPerSecond.ok);
    $("#meanNumberOfRequestsPerSecondKO").append(stat.meanNumberOfRequestsPerSecond.ko);
}
