from re import X
import ssl
import smtplib
from email.mime.multipart import MIMEMultipart
from email.mime.text import MIMEText
import sys, json

data=json.loads(sys.stdin.readline())

#print(data.split(",")[3])

sender_email = data.split(",")[0]
receiver_email = data.split(",")[2][13:]
password = data.split(",")[1]

message = MIMEMultipart("alternative")
message["Subject"] = "Códigos de recuperação de conta"
message["From"] = sender_email
message["To"] = receiver_email

text = """\
    gtghthyhtjyuyiku7ikioul
"""

header= """\
<!DOCTYPE html>
<html lang="pt-br" dir="ltr">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width">
<style type="text/css">
@media screen and (max-width: 525px) {
  table[class="wrapper"] {
    width: 100% !important;
  }

  td[class="logo"] {
    text-align: left;
    padding: 20px 0 20px 0 !important;
  }

  td[class="logo"] img {
    margin: 0 auto!important;
  }

  td[class="mobile-hide"] {
    display: none;
  }

  img[class="mobile-hide"] {
    display: none !important;
  }

  img[class="img-max"] {
    max-width: 100% !important;
    height: auto !important;
  }

  table[class="responsive-table"] {
    width: 100%!important;
  }

  td[class="padding"] {
    padding: 10px 5% 15px 5% !important;
  }

  td[class="padding-copy"] {
    padding: 10px 5% 10px 5% !important;
    text-align: center;
  }

  td[class="padding-meta"] {
    padding: 30px 5% 0px 5% !important;
    text-align: center;
  }

  td[class="no-pad"] {
    padding: 0 0 20px 0 !important;
  }

  td[class="no-padding"] {
    padding: 0 !important;
  }

  td[class="section-padding"] {
    padding: 50px 15px 50px 15px !important;
  }

  td[class="section-padding-bottom-image"] {
    padding: 50px 15px 0 15px !important;
  }

  td[class="mobile-wrapper"] {
    padding: 10px 5% 15px 5% !important;
  }

  table[class="mobile-button-container"] {
    margin: 0 auto;
    width: 100% !important;
  }

  a[class="mobile-button"] {
    width: 80% !important;
    padding: 15px !important;
    border: 0 !important;
    font-size: 16px !important;
  }
}
</style>
</head>
<body style="-webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%; max-width: 575px; margin: 0 auto; padding: 0; height: 100%; width: 100%;" dir="ltr">

<!-- HEADER -->
<table border="0" cellpadding="0" cellspacing="0" width="100%" style="-webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%; mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
    <tr>
        <td bgcolor="#ffffff" style="-webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%; mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
            <div align="center" style="padding: 0px 15px 0px 15px;">
                <table border="0" cellpadding="0" cellspacing="0" width="500" class="wrapper" style="-webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%; mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
                    <!-- LOGO/PREHEADER TEXT -->
                    <tr>
                        <td style="-webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%; mso-table-lspace: 0pt; mso-table-rspace: 0pt; padding: 30px 0px 30px 0px;" class="logo">
                            <table border="0" cellpadding="0" cellspacing="0" width="100%" style="-webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%; mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
                                <tr>
                                    <td bgcolor="#ffffff" width="400" align="center" class="mobile-hide" style="-webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%; mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
                                        <table border="0" cellpadding="0" cellspacing="0" style="-webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%; mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
                                            <tr>
                                                <td align="center" style="-webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%; mso-table-lspace: 0pt; mso-table-rspace: 0pt; padding: 0 0 5px 0; font-size: 23px; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; color: #666666; text-decoration: none;">
                                                    <span class="branding" style="color: #666666; text-decoration: none;">
                                                        <a href="https://weslley-hsstac7kk-weslleycz.vercel.app" target="_blank" style="-webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%; color: inherit; text-decoration: none;">
                                                            
                                                                
                                                                    <img src="https://user-images.githubusercontent.com/44758448/190775392-7b51ee36-a043-4a9d-864e-39375aa1f672.svg" class="email-logo" alt style="-ms-interpolation-mode: bicubic; border: 0; height: auto; line-height: 100%; outline: none; text-decoration: none; max-height: 50px;">
                                                                    
                                                            
                                                        </a>
                                                    </span>
                                                </td>
                                            </tr>
                                        </table>
                                    </td>
                                </tr>
                            </table>
                        </td>
                    </tr>
                </table>
            </div>
        </td>
    </tr>
</table>

<!-- ONE COLUMN W/ BOTTOM IMAGE SECTION -->
<table border="0" cellpadding="0" cellspacing="0" width="100%" style="-webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%; mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
    <tr>
        <td bgcolor="#f8f8f8" align="center" style="-webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%; mso-table-lspace: 0pt; mso-table-rspace: 0pt; padding: 70px 15px 70px 15px;" class="section-padding-bottom-image">
            <table border="0" cellpadding="0" cellspacing="0" width="500" class="responsive-table" style="-webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%; mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
                <tr>
                    <td style="-webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%; mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
                        <table width="100%" border="0" cellspacing="0" cellpadding="0" style="-webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%; mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
                            <tr>
                                <td style="-webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%; mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
                                    <!-- COPY -->
                                    <table width="100%" border="0" cellspacing="0" cellpadding="0" style="-webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%; mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
                                        
                                            <tr>
                                                <td align="center" style="-webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%; mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-size: 25px; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; color: #333333;" class="padding-copy">
                                                <center>
                                                """

footer= """\
    </center>
     </td>
                                            </tr>
                                        
                                        <tr>
                                            <td align="center" style="-webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%; mso-table-lspace: 0pt; mso-table-rspace: 0pt; padding: 20px 0 0 0; font-size: 16px; line-height: 25px; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; color: #666666;" class="padding-copy">
                                              <!-- Intro -->
                                                
                                                                                                      <p>Acima o seu código</p>
                                                                                                  

                                                <!-- Dictionary -->
                                                
                                            </td>
                                        </tr>
                                    </table>
                                </td>
                            </tr>
                            <tr>
                                <td style="-webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%; mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
                                    <!-- Table -->
                                    
                                        
                                    
                                </td>
                            </tr>
                        </table>
                    </td>
                </tr>
            </table>
        </td>
    </tr>
</table>

<!-- ONE COLUMN SECTION -->
<table border="0" cellpadding="0" cellspacing="0" width="100%" style="-webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%; mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
    <tr>
        <td bgcolor="#ffffff" align="center" style="-webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%; mso-table-lspace: 0pt; mso-table-rspace: 0pt; padding: 15px 15px 40px 15px;" class="section-padding">
            <table border="0" cellpadding="0" cellspacing="0" width="500" class="responsive-table" style="-webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%; mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
                <tr>
                    <td style="-webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%; mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
                        <table width="100%" border="0" cellspacing="0" cellpadding="0" style="-webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%; mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
                            <!-- Action -->
                            
                                                                <tr>
                                        <td style="-webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%; mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
                                            <!-- COPY -->
                                            <table align="center" width="100%" border="0" cellspacing="0" cellpadding="0" style="-webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%; mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
                                                <tr>
                                                    <td align="center" style="-webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%; mso-table-lspace: 0pt; mso-table-rspace: 0pt; padding: 25px 0 0 0; font-size: 16px; line-height: 25px; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; color: #666666;" class="padding-copy">
                                                        <p>Se não foi você que solicitou o código entre em contato no botão abaixo.</p>
                                                    </td>
                                                </tr>
                                            </table>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td style="-webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%; mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
                                            <!-- BULLETPROOF BUTTON -->
                                            <table align="center" width="100%" border="0" cellspacing="0" cellpadding="0" class="mobile-button-container" style="-webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%; mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
                                                <tr>
                                                    <td align="center" style="-webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%; mso-table-lspace: 0pt; mso-table-rspace: 0pt; padding: 25px 0 0 0;" class="padding-copy">
                                                        <table border="0" cellspacing="0" cellpadding="0" class="responsive-table" style="-webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%; mso-table-lspace: 0pt; mso-table-rspace: 0pt; border-spacing: 10px;">
                                                            <tr>
                                                                                                                                    <td align="center" style="-webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%; mso-table-lspace: 0pt; mso-table-rspace: 0pt;"><a href="http://example.com/verify_account" target="_blank" style="-webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%; font-size: 16px; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; font-weight: normal; color: #ffffff; text-decoration: none; background-color: #4ac793; border-top: 15px solid #4ac793; border-bottom: 15px solid #4ac793; border-left: 25px solid #4ac793; border-right: 25px solid #4ac793; border-radius: 3px; -webkit-border-radius: 3px; -moz-border-radius: 3px; display: inline-block;" class="mobile-button">Contato &rarr;</a></td>
                                                                                                                            </tr>
                                                        </table>
                                                    </td>
                                                </tr>
                                            </table>
                                        </td>
                                    </tr>
                                                            
                            <!-- Outro -->
                            
                              <tr>
                                  <td style="-webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%; mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
                                      <table align="center" width="100%" border="0" cellspacing="0" cellpadding="0" style="-webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%; mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
                                          <tr>
                                              <td align="center" style="-webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%; mso-table-lspace: 0pt; mso-table-rspace: 0pt; padding: 25px 30px 0; font-size: 16px; line-height: 25px; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; color: #666666;" class="padding-copy">
                                                                                                </td>
                                          </tr>
                                      </table>
                                  </td>
                              </tr>
                            
                        </table>
                    </td>
                </tr>
            </table>
        </td>
    </tr>

    

    <tr>
        <td bgcolor="#f8f8f8" align="center" style="-webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%; mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
            <table width="100%" border="0" cellspacing="0" cellpadding="0" align="center" style="-webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%; mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
                <tr>
                    <td style="-webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%; mso-table-lspace: 0pt; mso-table-rspace: 0pt; padding: 20px 0px 20px 0px;">
                        <!-- UNSUBSCRIBE COPY -->
                        <table width="500" border="0" cellspacing="0" cellpadding="0" align="center" class="responsive-table" style="-webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%; mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
                            <tr>
                                <td align="center" valign="middle" style="-webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%; mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-size: 12px; line-height: 18px; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; color: #666666;">
                                    <span class="appleFooter" style="color:#666666;">
                                        &copy; 2022 <a href="https://weslley-hsstac7kk-weslleycz.vercel.app" target="_blank" style="-webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%; color: #999999; text-decoration: none;">Store</a>. All rights reserved.
                                    </span>
                                    <br>
                                </td>
                            </tr>
                        </table>
                    </td>
                </tr>
            </table>
        </td>
    </tr>
</table>

<!-- Support for Gmail Go-To Actions -->


</body>
</html>

    """

html = header+data.split(",")[3]+footer


part1 = MIMEText(text, "plain")
part2 = MIMEText(html, "html")

message.attach(part1)
message.attach(part2)

context = ssl.create_default_context()
with smtplib.SMTP_SSL("smtp.gmail.com", 465, context=context) as server:
    server.login(sender_email, password)
    server.sendmail(
        sender_email, receiver_email, message.as_string()
    )
