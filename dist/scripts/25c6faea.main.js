"use strict";function renderRepos(a){a.forEach(function(a){var b=getNameTemplate(a);$(".rightbar").append(b)})}function renderProfile(a){var b=getProfileTemplate(a);$(".sidebar").append(b)}function renderHeader(a){var b=getHeaderInfo(a);$(".topuserfield").append(b)}var getNameTemplate=_.template($(".repo-row").text());$.getJSON("https://api.github.com/users/Charlie610790/repos?client_id=ae0cd330a00ca9c3c446&client_secret=a9ba76c532a3c0dca1907511ae377bee64532a47").done(function(a){renderRepos(a)});var getProfileTemplate=_.template($(".profile").text());$.getJSON("https://api.github.com/users/Charlie610790?client_id=ae0cd330a00ca9c3c446&client_secret=a9ba76c532a3c0dca1907511ae377bee64532a47").done(function(a){renderProfile(a)});var getHeaderInfo=_.template($(".headerInfo").text());$.getJSON("https://api.github.com/users/Charlie610790?client_id=ae0cd330a00ca9c3c446&client_secret=a9ba76c532a3c0dca1907511ae377bee64532a47").done(function(a){renderHeader(a)});