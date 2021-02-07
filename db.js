const sqlite3 = require('sqlite3');
const { open } =require('sqlite');

function getDb() {
  return open({
    filename: './db.sqlite',
    driver: sqlite3.Database,
  });
}

async function checkAndMarkCompleted(code) {
  const db = await getDb();

  const sql = `
    UPDATE vaccination_code
    SET confirmed = true
    WHERE code = $code
    AND confirmed = false;
  `;

  const result = await db.run(sql, { $code: code });

  if (result.changes !== 1) {
    console.error(result);
    throw new Error('Code invalid or already confirmed');
  }
}

module.exports = { checkAndMarkCompleted };
