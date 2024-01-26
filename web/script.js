function hello() {
  alert("hellow");
}

const LINUX_README =
  "https://raw.githubusercontent.com/torvalds/linux/master/README";

async function make_a_fetch(id) {
  const r = await fetch(LINUX_README);
  console.log("ok", r.ok);
  const txt = await r.text();
  document.querySelector(id).innerHTML = txt;
}

async function make_a_fetch_keepalive(id) {
  const r = await fetch(LINUX_README, {
    keepalive: true,
  });
  console.log("ok", r.ok);
  console.log("keepalive?", r.keepalive);
  const txt = await r.text();
  document.querySelector(id).innerHTML = txt;
}

const event_to_send = {
  "key": {
    "service_platform": "lol",
    "client": "web",
    "user_multi_account_id": "PM00111111",
    "device_id": "aaaaa-bbbb-cccc-dddd-3333333333",
  },
  "session": {
    "experiment": "",
    "user_platform_id": "lol00011223344",
    "super_user_flg": 0,
  },
  "device": {
    "app_version": "develop",
    "os": "macOS",
    "os_version": "10.15.7",
    "user_agent":
      "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
    "viewport_h": 857,
    "viewport_w": 1512,
    "model_name": "",
    "browser_name": "Chrome",
    "browser_version": "120.0.0.0",
  },
  "version": "3.7.0.0",
  "client_timestamp": 1706081540806,
};

function make_a_fetch_keepalive_reload_page(keepalive) {
  fetch("http://localhost:8000/keepalive/1", {
    keepalive,
    method: "POST",
    headers: {
      "x-my-custom": "1337 banana pie",
    },
    body: JSON.stringify(event_to_send),
  });
  // const txt = await r.text()
  // document.querySelector(id).innerHTML = txt
  window.location.reload();
}

function reset(id, c) {
  document.querySelector(id).innerHTML = c ?? "Result";
}
