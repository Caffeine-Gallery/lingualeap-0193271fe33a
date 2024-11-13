import Func "mo:base/Func";

import Array "mo:base/Array";
import Text "mo:base/Text";
import HashMap "mo:base/HashMap";
import Hash "mo:base/Hash";
import Nat "mo:base/Nat";

actor {
    // Stable variable to store translations
    stable var translations : [(Text, Text, Text)] = [];

    // Function to store a translation
    public shared func storeTranslation(text : Text, targetLang : Text, translatedText : Text) : async () {
        translations := Array.append<(Text, Text, Text)>(translations, [(text, targetLang, translatedText)]);
    };

    // Function to retrieve all translations
    public query func getTranslations() : async [(Text, Text, Text)] {
        return translations;
    };
}
