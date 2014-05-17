var getNameTemplate = _.template($('.repo-row').text());
$.getJSON('https://api.github.com/users/Charlie610790/repos?client_id=ae0cd330a00ca9c3c446&client_secret=a9ba76c532a3c0dca1907511ae377bee64532a47').done(function(repos){
    renderRepos(repos);
});

function renderRepos (repos){
    repos.forEach(function(repo){

        var rendered = getNameTemplate(repo);

        $('.rightbar').append(rendered);
    });
}

var getProfileTemplate = _.template($('.profile').text());
$.getJSON('https://api.github.com/users/Charlie610790?client_id=ae0cd330a00ca9c3c446&client_secret=a9ba76c532a3c0dca1907511ae377bee64532a47').done(function(profile){
    renderProfile(profile);
});

function renderProfile (profile){
        var rendered = getProfileTemplate(profile);
        $('.sidebar').append(rendered);
    }


var getHeaderInfo = _.template($('.headerInfo').text());
$.getJSON('https://api.github.com/users/Charlie610790?client_id=ae0cd330a00ca9c3c446&client_secret=a9ba76c532a3c0dca1907511ae377bee64532a47').done(function(header){
    renderHeader(header);
});

function renderHeader (header){
        var rendered = getHeaderInfo(header);
        $('.topuserfield').append(rendered);
    }



















