const QRCode = require('easyqrcodejs-nodejs');
const fs = require('fs');
const { v4: uuidv4 } = require('uuid');

const countGewigte = {
    "8": "456g - 576g",
    "10": "364g - 462g",
    "12": "300g - 371g",
    "14": "258g - 313g",
    "16": "227g - 274g",
    "18": "203g - 243g",
    "20": "184g - 217g",
    "22": "165g - 196g"
};

function generateQR(hoeveel, telling) {
    for (var i=0; i<hoeveel; i++) {
        let uuid = uuidv4();

        let qrcode = new QRCode({
            text: `${uuid},12`,
            width: 256,
            height: 256,
            correctLevel: QRCode.CorrectLevel.H,
            title: `Code: ${telling}`,
            titleFont: 'bold 52px Arial',
            titleHeight: 100,
            titleTop: 50,
            subTitle: countGewigte[telling],
            subTitleFont: 'bold 24px Arial',
            subTitleTop: 80
        });
        qrcode.saveImage({
            path: `qrcode${i+1}.png`
        });
    }
}

generateQR(2, "14");