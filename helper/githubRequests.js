

function makeAccessTokenRequest() {

    let h = new Headers();
    h.append("Accept", "application/json")

    var request = new Request({
        url: 'https://github.com/login/oauth/access_token?'+ new URLSearchParams({
            client_id: 'b76227f559e4ff3e664b',
            client_secret: "ae245b62e0cdb003c52f3ae50cec0e361628f803",
            code: window.localStorage.getItem("code"),
        }),
        method: 'POST',
        headers: h
      });

    fetch(request)
      .then(res => res.json())
      .then(data => console.log(data))


}