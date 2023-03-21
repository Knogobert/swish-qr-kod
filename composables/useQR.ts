export function useQR() {
  async function getQRCode(url, data) {
    const res = await fetch(url, {
      headers: {
        'Content-Type': 'application/json'
      },
      // mode: 'no-cors',
      method: "POST",
      body: JSON.stringify(data)
    })
    console.log('SENDING data:', data)
    return res.blob()
  }

  function blobToBase64(blob) {
    return new Promise((resolve, _) => {
      const reader = new FileReader();
      reader.onloadend = () => resolve(reader.result);
      console.log('blob:', blob)
      reader.readAsDataURL(blob);
      console.log('reader:', reader)
      return reader.result;
    });
  }

  async function createImageFromBlob(blob) {
    const img = new Image()
    img.src = await blobToBase64(blob);
    img.download = "swish-qr-kod.png";
    // img.src = URL.createObjectURL(blob)

    // // newer promise based version of img.onload
    // await img.decode()

    // // Don't forget to revoke the blob url when
    // // you no longer need it (to release memory)
    // URL.revokeObjectURL(img.src)

    return img
  }

  function downloadImage(imgSrc = '', payee = '') {
    console.log('imgSrc:', imgSrc)
    if (!imgSrc) return;

    const payeeNum = payee ? `-${payee}` : '';
    const a = document.createElement("a");
    a.style = "display: none";
    a.href = imgSrc;
    a.download = `swish-qr-kod${payeeNum}.png`;
    document.body.appendChild(a);
    a.click();
    // document.body.removeChild(a);
  }

  return {
    getQRCode,
    createImageFromBlob,
    downloadImage,
  }
}