/* eslint-disable no-undef */
const admin = require("firebase-admin");

admin.initializeApp({
  credential: admin.credential.cert(
    {
      "type": "service_account",
      "project_id": "last-12b3a",
      "private_key_id": "aa5c25e2e4847427b573c46946aa2b0dbdc8bdcd",
      "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQDY/ZcUPg+fL1uM\nBTJal51+w2L96z3Gw2AU0dXo+lQwK6+OPIzr+Rl6IVhkwBlP6IKQSFwAmW/LyDp9\n5Jluu0apJ3AYybDcKKCh752IIAt/LUBWA0Yn4A9Y3s5Hyr77Lu9N6vgmhdAS+Dqy\n2fDWifvYWhnbnwHnWpzpQus/sHu6WvwSyFjpeV6y5ung7tLCwlKw6lC9x/1gbeOX\nImkPECJTsldnVcUB/1momYV+5KzH/umneXz+KE3GX/qsZlBpJCiNDYtHZPPLSdLC\nOm/D8BuSP00eMJBUA5L/ulmneT76PnRa/g9o11/WLRXl0fWVcKiMRYJOKneVu36/\nsJzcV+tfAgMBAAECggEAU040WNSkubf8PQrntIj9saOAlzxfiLYMZqHSrnGgraev\n6/sKHTQSmGVB4tgvP5LjwVHOZHqDxagW8Ks5Tp4+eAWIjzOrnzJHzTPJdm/bChXM\n29jA7+Eg8z0C0+QeIx/3RqI9Z8i6w/Whz3VFdZAe7IZW5A6tM+2BTTpgR6DRN48u\nIitUMdFWQygR0OrY045FQUCUMAqurcALprFp64XaJGjAJqYPqZoWCBzVFVlTZD7c\ndmrAAkMShHIw52AF2A06K5FGykIwo8dhFW+QuvkehKTxoY3Yj/g6cEtxXNs1JtSI\nUdWDV2mneQnSLjfl7/1/++67YBP3VIDA5g+3AENryQKBgQD/rVnA7AX5CSjxKm0V\nTx87KY1q5JIELtHiLu76memDj9O/18GnJ692M/cO9YKeiBppa//Nv2FNNpSqw4ku\n/jqTG/1zBuOQwpCdAq1cCe4pZ09S1asUAi6MFJmKzxKmO/+Fo3Qu/nCSZmjI9Sr4\nUzVFfezIIobttZ3vxYBRp0vhWQKBgQDZQ7vd35KPtHPf7XLKfIiqRIrY6P+IE9YE\ndkwZTSGOfPFiUVppsCaX3F3qCvf6I3t4fdzp8qozLjeGxqG/tuqjwSIPQIqOJkvF\nwzUVseuWUsQ+fUB+ulQF8QPyJ0tlAnXIXBm22lK1atQ/Q88kXw63HBhwwxh6IrKd\nC7FqNvsjdwKBgQDPEkC85Os5dNe56piKR5iNu+uTBSfVR24o98YJJJphOR1QJJfs\nn1GWNCQF84UkjCqH8zYsFrHhbTEe1FrIupIKDwNII+4ukcW5xC9PeaNv2QH/npl+\nDP5R6WUpbOg3xiP+whEY9m2JxHNdPmLc19cvPvuEY6JP52XQiW6RsyLbkQKBgBle\n7IBDTFUVqHZcvwvgMQFZEbG0u6pDTrmkqsxFkoaWFoX5pAo1dLxFEn5zG3QNUqzG\nXda/7JofaoKFjXvau1m2AukvCz8AP9bvLbLD3RPnxFzbuX1S+t7avzA24HoCKIjm\nIGaW5hOjTve4Tmcb5pcBY+U/EwuoI51tMSGLHBaPAoGBAPeFxBcKnx38b088ovQd\nGwlhrsJPhoZfjtgGa4bEBD6ya+N5+9gKNPeyV2l5nGjFqG3lgbwcFFuULLmWUjTG\nGHf9KDF4+jn6wI+OtQl0y67CtPm8y5wbx95uZKq8WX0mzFk4p+MG8yeOsW0uy6iQ\n+ssnP5d18LOt/OpKicA6tspN\n-----END PRIVATE KEY-----\n",
      "client_email": "firebase-adminsdk-mse5i@last-12b3a.iam.gserviceaccount.com",
      "client_id": "108159603871557321380",
      "auth_uri": "https://accounts.google.com/o/oauth2/auth",
      "token_uri": "https://oauth2.googleapis.com/token",
      "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
      "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-mse5i%40last-12b3a.iam.gserviceaccount.com",
      "universe_domain": "googleapis.com"
    }
  ),
  databaseURL: "https://last-12b3a-default-rtdb.firebaseio.com"
});


