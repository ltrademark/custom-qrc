# Custom QR generator

### Usage

`https://zoomph-qrc.glitch.me/qrcode?data=[url|text]`

Sample

![Sample](https://github.com/user-attachments/assets/31d6812d-a57c-4d10-b660-7f51bc112a89)

### Specific Usage: 2fa

Use the URL schema below and replace the content inside `[ ]` and append it at the end of the qrcode?data= url above.

`otpauth://totp/[App Name]:[Email]?secret=[Base32 Hash]&issuer=[Issuer]`

### Related Links
<ul>
  <li><a href="https://craftsmen.nl/secure-your-own-application-with-two-factor-authentication/" target="_blank">Secure your own application with 2fa</a></li>
  <li><a href="https://github.com/google/google-authenticator/wiki/Key-Uri-Format" target="_blank">Key URI format</a></li>
  <li><a href="https://docs.yubico.com/yesdk/users-manual/application-oath/uri-string-format.html" target="_blank">oAuth URI String Format</a></li>
</ul>
