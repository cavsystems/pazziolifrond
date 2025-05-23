# cordova-plugin-btprinter

A Cordova driver for printers

Plugin based of: https://github.com/michael79bxl/zbtprinter

Example:

List Linked Devices:

```
window.cordova.plugins.btprinter.find(
  (data) => {
    alert(JSON.stringify(data));
      },
  (fail) => {
    alert(fail);
  }
);
```

Printer ZPL:

```
cordova.plugins.btprinter.printZPL("AC:3F:A4:52:73:C4","^XA^FO10,10^AFN,26,13^FDHello, World!^FS^XZ",
    (success) => {
            }, function(fail) => {
            }
);
```

Printer Text:

```
cordova.plugins.btprinter.printText("AC:3F:A4:52:73:C4","Hello, World!",
    (success) => {
            }, function(fail) => {
            }
);
```

Printer Image:

```
cordova.plugins.btprinter.printText("AC:3F:A4:52:73:C4","data:image/jpg;base64, ....",
    (success) => {
            }, function(fail) => {
            }
);
```

Install Cordova

```
cordova plugin add https://github.com/kevbarrios/cordova-plugin-btprinter.git

cordova plugin add cordova-plugin-btprinter
```

config.xml

```
<plugin name="com.kbarrios.btprinter" spec="cordova-plugin-btprinter@^1.0.7" />
```

ZPL - Zebra Programming Language
For more information about ZPL please see the [PDF Official Manual](https://support.zebra.com/cpws/docs/zpl/zpl_manual.pdf)
