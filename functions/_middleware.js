export async function onRequest(context) {
  // Lấy thông tin cơ bản
  const { request } = context;
  const ip = request.headers.get('cf-connecting-ip');
  const country = request.headers.get('cf-ipcountry');
  const url = request.url;
  const userAgent = request.headers.get('user-agent');

  // Ghi log ra console của Cloudflare
  console.log(`[LOG] IP: ${ip} | Quốc gia: ${country} | Truy cập: ${url} | Thiết bị: ${userAgent}`);

  // Tiếp tục xử lý request để trang web hiển thị bình thường
  return await context.next();
}