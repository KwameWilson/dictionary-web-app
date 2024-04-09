"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const word = document.getElementById('search');
const displaySearchWord = document.getElementById('display');
const phonetics = document.getElementsByClassName('phonetics');
const search = document.querySelector('.search-bar img');
const toggle = document.querySelector('#theme-toggle');
const wordArea = document.querySelector('.word-area');
function fetchData() {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word.value}`)
            .then(resp => {
            // console.log(resp.json());
            return resp.json();
        })
            .then(data => {
            wordArea.innerHTML = `
                
                <div class="search-term">
                <div class="word">
                    <h1 id="display">${data[0].word}</h1>
                    <div class="phonetics">
                        ${data[0].phonetic}
                    </div>
                </div>

                <div class="play-button">
                    <img src="img/icon-play.svg" alt="play-button">
                </div>
            </div>

            <div class="search-info">
                <div>
                    <h3>${data[0].meanings[0].partOfSpeech}</h3>
                    <span></span>
                </div>
                

                <div class="definition">
                    <p>Meaning</p>
                    <ul>
                        <li><span>${data[0].meanings[0].definitions[0].definition}, ${data[0].meanings[0].definitions[1].definition}</span></li>
                    </ul>

                    <p>Synonyms <span>electronic keyboard</span></p> 
                </div>

                <div class="alt-definition">
                    <div>
                        <h3>${data[0].meanings[1].partOfSpeech}</h3>
                    <span></span>
                    </div>
                    
                    <p>Meaning</p>
                    <ul>
                        <li><span>${data[0].meanings[1].definitions[0].definition}</span></li>
                        <p>“Keyboarding is the part of this job I hate the most.”</p>
                    </ul>
                </div>
            </div>
        </div> `;
        }).catch(error => console.error('Error!', error));
    });
}
search.addEventListener('click', fetchData);
