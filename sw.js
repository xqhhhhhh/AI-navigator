self.addEventListener('install', function(event) {
  // 安装时可以缓存文件
  self.skipWaiting();
});
self.addEventListener('fetch', function(event) {
  // 可以自定义离线策略
});
