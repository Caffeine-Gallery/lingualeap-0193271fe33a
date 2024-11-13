import { backend } from 'declarations/backend';

const inputText = document.getElementById('inputText');
const languageSelect = document.getElementById('languageSelect');
const translateButton = document.getElementById('translateButton');
const translatedText = document.getElementById('translatedText');
const readAloudButton = document.getElementById('readAloudButton');

translateButton.addEventListener('click', async () => {
    const text = inputText.value;
    const targetLang = languageSelect.value;
    if (text) {
        try {
            const response = await fetch(`https://api.mymemory.translated.net/get?q=${encodeURIComponent(text)}&langpair=en|${targetLang}`);
            const data = await response.json();
            translatedText.textContent = data.responseData.translatedText;
            // Store translation in backend (optional)
            await backend.storeTranslation(text, targetLang, data.responseData.translatedText);
        } catch (error) {
            console.error('Translation error:', error);
            translatedText.textContent = 'Translation failed. Please try again.';
        }
    }
});

readAloudButton.addEventListener('click', () => {
    const utterance = new SpeechSynthesisUtterance(translatedText.textContent);
    utterance.lang = languageSelect.value;
    window.speechSynthesis.speak(utterance);
});
