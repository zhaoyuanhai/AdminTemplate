var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
define(["require", "exports", "api"], function (require, exports, api_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    VueInit({
        data: {
            title: "用户",
            tableData: [],
            formInline: {},
            modelForm: {},
            rules: {
                userName: [
                    { required: true, message: "用户名必填", trigger: "blur" },
                    { min: 3, max: 20, message: "用户名长度必须在3-20个字符之间", trigger: "blur" },
                    {
                        validator: function (rule, value, callback) {
                            return __awaiter(this, void 0, void 0, function () {
                                var result;
                                return __generator(this, function (_a) {
                                    switch (_a.label) {
                                        case 0: return [4 /*yield*/, api_1.default.system.checkUserName(value)];
                                        case 1:
                                            result = _a.sent();
                                            if (result.Success) {
                                                callback();
                                            }
                                            else {
                                                callback(new Error(result.Errors[0].Message));
                                            }
                                            return [2 /*return*/];
                                    }
                                });
                            });
                        },
                        trigger: "blur"
                    }
                ],
                realName: [
                    { required: true, message: "真实姓名必填", trigger: "blur" }
                ],
                mobile: [
                    { pattern: /^1[34578]\d{9}$/, message: '手机号格式错误', trigger: "blur" }
                ],
                email: [
                    { type: 'email', max: 50, message: "邮箱格式不正确", trigger: "blur" }
                ]
            }
        },
        mounted: function () {
            return __awaiter(this, void 0, void 0, function () {
                var result;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, api_1.default.system.getUserList({ PageIndex: 1, PageSize: 10 })];
                        case 1:
                            result = _a.sent();
                            this.$data.tableData = result.Data.Datas;
                            return [2 /*return*/];
                    }
                });
            });
        },
        methods: {
            _submit: function () {
                return __awaiter(this, void 0, void 0, function () {
                    var result;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4 /*yield*/, api_1.default.system.setUser(this.$data.modelForm)];
                            case 1:
                                result = _a.sent();
                                if (result.Success) {
                                    alert('ok');
                                }
                                return [2 /*return*/];
                        }
                    });
                });
            }
        }
    });
});
//# sourceMappingURL=UserManager.js.map