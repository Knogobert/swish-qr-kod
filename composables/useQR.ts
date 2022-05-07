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

  async function createImageFromBlob(blob) {
    const img = new Image()
    img.src = URL.createObjectURL(blob)

    // newer promise based version of img.onload
    await img.decode()

    // Don't forget to revoke the blob url when
    // you no longer need it (to release memory)
    URL.revokeObjectURL(img.src)

    return img
  }

  function downloadImage(imgSrc) {
    console.log('imgSrc:', imgSrc)
    if (!imgSrc) return;

    const a = document.createElement("a");
    document.body.appendChild(a);
    a.style = "display: none";
    a.href = imgSrc;
    a.download = "test";
    a.click();
  }

  return {
    getQRCode,
    createImageFromBlob,
    downloadImage,
  }
}