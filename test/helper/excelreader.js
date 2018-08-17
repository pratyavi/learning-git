
import Excel from 'exceljs';
import { callbackify } from 'util';
class excelReader {
    excelReader() {
        //
    }
    open(filename) {

        var wb = new Excel.Workbook();
        var promiseObj = new Promise(function (resolve, reject) {
            wb.xlsx.readFile("D:\\7p\\Automation Suite\\Wdio\\MDM\\test\\testdata\\" + filename).then(function () {
                var worksheet = wb.getWorksheet("Sheet1");
                var row = worksheet.getRow(2);
                var userid = row.getCell(1).value;
                resolve(userid);
            });
        });
        return promiseObj;
    }
}
export default new excelReader();