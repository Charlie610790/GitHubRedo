var getNameTemplate = _.template($('.repo-row').text());
$.getJSON('https://api.github.com/users/Charlie610790/repos').done(function(repos){
    renderRepos(repos);
});

function renderRepos (repos){
    repos.forEach(function(repo){

        var rendered = getNameTemplate(repo);

        $('.rightbar').append(rendered);
    });
}

var getProfileTemplate = _.template($('.profile').text());
$.getJSON('https://api.github.com/users/Charlie610790').done(function(profile){
    renderProfile(profile);
});

function renderProfile (profile){
        var rendered = getProfileTemplate(profile);
        $('.sidebar').append(rendered);
    }

var getHeaderInfo = _.template($('.headerInfo').text());
$.getJSON('https://api.github.com/users/Charlie610790').done(function(header){
    renderHeader(header);
});

function renderHeader (header){
        var rendered = getHeaderInfo(header);
        $('.topuserfield').append(rendered);
    }