import os, re, urllib.request, urllib.parse, mimetypes, sys
from pathlib import Path
content_path = Path(r"c:\Users\Tran Nguyen Ky V y\AppData\Roaming\Code\User\workspaceStorage\1f9e66d0c495433fd65f8cbf0c716b37\GitHub.copilot-chat\chat-session-resources\4d5fa6bb-36f8-435f-acde-4859c50657df\call_D7UXAB1ZhzKwKuurWlHzQw92__vscode-1784125213589\content.txt")
asset_dir = Path(r"c:\Users\Tran Nguyen Ky V y\Downloads\TKGDND_DAMH_Nhom5\assets")
text = content_path.read_text(encoding="utf-8")
urls = list(dict.fromkeys(re.findall(r"https://www\.figma\.com/api/mcp/asset/[A-Za-z0-9\-\_]+", text)))
for i,url in enumerate(urls,1):
    ext = ".png"
    req = urllib.request.Request(url, method="HEAD")
    try:
        with urllib.request.urlopen(req, timeout=20) as resp:
            ctype = resp.headers.get("Content-Type", "")
            if "jpeg" in ctype or "jpg" in ctype:
                ext = ".jpg"
            elif "png" in ctype:
                ext = ".png"
            elif "gif" in ctype:
                ext = ".gif"
            elif "svg" in ctype:
                ext = ".svg"
            data = resp.read()
    except Exception:
        with urllib.request.urlopen(url, timeout=20) as resp:
            ctype = resp.headers.get("Content-Type", "")
            if "jpeg" in ctype or "jpg" in ctype:
                ext = ".jpg"
            elif "png" in ctype:
                ext = ".png"
            elif "gif" in ctype:
                ext = ".gif"
            elif "svg" in ctype:
                ext = ".svg"
            data = resp.read()
    path = asset_dir / f"asset_{i:02d}{ext}"
    path.write_bytes(data)
    print(path.name)
