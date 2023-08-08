import {utils,read} from "xlsx";

function ExcelReader(props) {
  function onChange(e) {
    var files = e.target.files;
    var fileReader = new FileReader();
    fileReader.onload = function (ev) {
      try {
        var data = ev.target.result;
        var workbook = read(data, {
          type: "binary",
        }); // 以二进制流方式读取得到整份excel表格对象
        var persons = []; // 存储获取到的数据
      } catch (e) {
        console.log("文件类型不正确");
        return;
      }
      // 表格的表格范围，可用于判断表头是否数量是否正确
      var fromTo = "";
      // 遍历每张表读取
      for (var sheet in workbook.Sheets) {
        if (workbook.Sheets.hasOwnProperty(sheet)) {
          fromTo = workbook.Sheets[sheet]["!ref"];
          console.log(fromTo);
          persons = persons.concat(
            utils.sheet_to_json(workbook.Sheets[sheet])
          );

          break; // 如果只取第一张表，就取消注释这行
        }
      }
      console.log(persons);
      //在控制台打印出来表格中的数据
      var content = JSON.stringify(persons);
      var eleLink = document.createElement("a");
      eleLink.download = props.name+".json";
      eleLink.style.display = "none";
      // 字符内容转变成blob地址
      var blob = new Blob([content]);
      eleLink.href = URL.createObjectURL(blob);
      // 触发点击
      document.body.appendChild(eleLink);
      eleLink.click();
      // 然后移除
      document.body.removeChild(eleLink);
    };
    // 以二进制方式打开文件
    fileReader.readAsBinaryString(files[0]);
  }
  return <input type="file" id="excel-file" onChange={onChange}></input>;
}

export default ExcelReader;
