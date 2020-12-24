export const downloadByBlob = (filePath: string, sub = 'mp4') => {
  fetch(filePath)
    .then((res) => res.blob())
    .then((blob) => {
      const a = document.createElement('a')
      document.body.appendChild(a)
      a.style.display = 'none'
      // 使用获取到的blob对象创建的url
      const url = window.URL.createObjectURL(blob)
      a.href = url
      // 指定下载的文件名
      a.download = 'test.' + sub
      a.click()
      document.body.removeChild(a)
      // 移除blob对象的url
      window.URL.revokeObjectURL(url)
    })
}
