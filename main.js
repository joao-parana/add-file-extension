define(function (require, exports, module) {
    var LanguageManager = brackets.getModule("language/LanguageManager");
    var language = LanguageManager.getLanguage("html");
    language.addFileExtension("html.eco");
    language.addFileExtension("html.md.eco");
});

