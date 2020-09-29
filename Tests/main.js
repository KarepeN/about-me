QUnit.module('convertToPounds', function () {
   QUnit.test("Test1", function (assert) {
      assert.equal(convertToPounds(0), 0);
   });

   QUnit.test("Test2", function (assert) {
      assert.equal(convertToPounds(1), 2.20462262185);
   });
   QUnit.test("Test3", function (assert) {
      assert.equal(convertToPounds(5), 11.02311310925);
   });
   QUnit.test("Test4", function (assert) {
      assert.equal(convertToPounds(10), 22.0462262185);
   });
   QUnit.test("Test5", function (assert) {
      assert.equal(convertToPounds(20), 44.092452437);
   });
});