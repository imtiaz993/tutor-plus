

// export const fetchWhatsAppLoginAuthentication = async (username: string, password: string) => {

//     url = 
  
//     const response = await fetch()
//   }
  
  
//   export const sendStudentWhatsAppMessage = async (message: string, number: string) => {
    
//     const response = await fetch(myUrl, {
//       method: 'POST',
//       body: content,
//       headers: {'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'} });
    
//     if (!response.ok) { /* Handle */ }
    
//     // If you care about a response:
//     if (response.body !== null) {
//       // body is ReadableStream<Uint8Array>
//       // parse as needed, e.g. reading directly, or
//       const asString = new TextDecoder("utf-8").decode(response.body);
//       // and further:
//       const asJSON = JSON.parse(asString);  // implicitly 'any', make sure to verify type on runtime.
//     }
  
//   }