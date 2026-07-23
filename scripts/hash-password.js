// استخدام: node scripts/hash-password.js "الباسورد بتاعك"
const bcrypt = require("bcryptjs");

const password = process.argv[2];

if (!password) {
  console.log("اكتب الباسورد كمعامل، مثال:");
  console.log('node scripts/hash-password.js "MyStrongPass123"');
  process.exit(1);
}

const hash = bcrypt.hashSync(password, 10);
const escapedHash = hash.replace(/\$/g, "\\$");
console.log("\nحط السطر ده في ملف .env.local (لاحظ إن علامات $ لازم تتكتب \\$ عشان Next.js متفهمهاش كمتغير):\n");
console.log(`ADMIN_PASSWORD_HASH=${escapedHash}\n`);
