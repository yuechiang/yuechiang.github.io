import{_ as e}from"./plugin-vue_export-helper.21dcd24c.js";import{e as n}from"./app.fee38594.js";const i={},s=n(`<h1 id="linux-\u5B89\u88C5-ftp-\u670D\u52A1" tabindex="-1"><a class="header-anchor" href="#linux-\u5B89\u88C5-ftp-\u670D\u52A1" aria-hidden="true">#</a> Linux \u5B89\u88C5 ftp \u670D\u52A1</h1><h2 id="\u4E0B\u8F7D\u5B89\u88C5-ftp" tabindex="-1"><a class="header-anchor" href="#\u4E0B\u8F7D\u5B89\u88C5-ftp" aria-hidden="true">#</a> \u4E0B\u8F7D\u5B89\u88C5 ftp</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>yum install -y vsftpd
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="add-user-for-ftp" tabindex="-1"><a class="header-anchor" href="#add-user-for-ftp" aria-hidden="true">#</a> add user for ftp</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>adduser <span class="token function">ftp</span>
<span class="token function">passwd</span> <span class="token function">ftp</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="config" tabindex="-1"><a class="header-anchor" href="#config" aria-hidden="true">#</a> config</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">vim</span> /etc/vsftpd/vsftpd.conf
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>#\u9664\u4E0B\u9762\u63D0\u53CA\u7684\u53C2\u6570\uFF0C\u5176\u4ED6\u53C2\u6570\u4FDD\u6301\u9ED8\u8BA4\u503C\u5373\u53EF\u3002

#\u4FEE\u6539\u4E0B\u5217\u53C2\u6570\u7684\u503C\uFF1A
#\u7981\u6B62\u533F\u540D\u767B\u5F55FTP\u670D\u52A1\u5668\u3002
anonymous_enable=NO
#\u5141\u8BB8\u672C\u5730\u7528\u6237\u767B\u5F55FTP\u670D\u52A1\u5668\u3002
local_enable=YES
#\u76D1\u542CIPv4 sockets\u3002
listen=YES

#\u5728\u884C\u9996\u6DFB\u52A0#\u6CE8\u91CA\u6389\u4EE5\u4E0B\u53C2\u6570\uFF1A
#\u5173\u95ED\u76D1\u542CIPv6 sockets\u3002
#listen_ipv6=YES

#\u5728\u914D\u7F6E\u6587\u4EF6\u7684\u672B\u5C3E\u6DFB\u52A0\u4E0B\u5217\u53C2\u6570\uFF1A
#\u8BBE\u7F6E\u672C\u5730\u7528\u6237\u767B\u5F55\u540E\u6240\u5728\u76EE\u5F55\u3002
local_root=/var/ftp/test
#\u5168\u90E8\u7528\u6237\u88AB\u9650\u5236\u5728\u4E3B\u76EE\u5F55\u3002
chroot_local_user=YES
#\u542F\u7528\u4F8B\u5916\u7528\u6237\u540D\u5355\u3002
chroot_list_enable=YES
#\u6307\u5B9A\u4F8B\u5916\u7528\u6237\u5217\u8868\u6587\u4EF6\uFF0C\u5217\u8868\u4E2D\u7528\u6237\u4E0D\u88AB\u9501\u5B9A\u5728\u4E3B\u76EE\u5F55\u3002
chroot_list_file=/etc/vsftpd/chroot_list
#\u5F00\u542F\u88AB\u52A8\u6A21\u5F0F\u3002
pasv_enable=YES
allow_writeable_chroot=YES
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,8);function a(d,l){return s}var t=e(i,[["render",a],["__file","ftp-linux.html.vue"]]);export{t as default};
