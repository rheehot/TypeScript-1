/// <reference path='fourslash.ts'/>

////function f() {
////
////}
////var x = [|function [|{| "declarationRangeIndex": 0 |}f|](g: any, h: any) {
////
////    let helper = function f(): any { f(); }
////
////    let foo = () => [|f|]([|f|], g);
////}|]

const [rDef, ...rest] = test.ranges();
verify.rangesAreRenameLocations(rest);
