console.log("clicked");
// Prompt user to select any serial port.
const port = await navigator.serial.requestPort();
console.log(port);

// Wait for the serial port to open.
await port.open({ baudRate: 9600  });

// const textEncoder = new TextEncoder();
sendMessage("Hello",port);


// const writer = port.writable.getWriter();
//  const writableStreamClosed = textEncoder.readable.pipeTo(port.writable);
// await writer.write(data);

// // Allow the serial port to be closed later.
// defaultWriter.releaseLock();

// await defaultWriter.close();
await port.close();



function str2ab(str) {
    var buf = new ArrayBuffer(str.length); // 2 bytes for each char
    var bufView = new Uint8Array(buf);
    for (var i=0, strLen=str.length; i < strLen; i++) {
    bufView[i] = str.charCodeAt(i);
    }
    return buf;
}


function ab2str(buf) {
    return String.fromCharCode.apply(null, new Uint8Array(buf));
}





function sendMessage(message,port) {
  // defaultWriter is of type WritableStreamDefaultWriter
  const defaultWriter = port.writable.getWriter();
  const data = str2ab("hello");
  console.log(data);
  for (var i=0, strLen=data.length; i < strLen; i++) {
      defaultWriter.ready
      .then(() => defaultWriter.write(data[i]))
      .then(() => {
          console.log("Chunk written to sink.");
          console.log(data[i]);
      })
      .catch((err) => {
          console.log("Chunk error:", err);
      });
  }
  
  defaultWriter.ready
  .then(() => {
    defaultWriter.close();
  })
  .then(() => {
    console.log("All chunks written");
  })
  .catch((err) => {
    console.log("Stream error:", err);
  });
}
                    