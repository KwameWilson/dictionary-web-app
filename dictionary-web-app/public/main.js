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
const search = document.querySelector('.search-bar img');
const toggle = document.querySelector('#theme-toggle');
search.addEventListener('click', () => {
    console.log('Has been clicked');
    function fetchData() {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word.value}`)
                .then(resp => {
                // console.log(resp.json());
                return resp.json();
            }).catch(error => console.error('Error!', error));
            console.log(response);
        });
    }
    fetchData();
});
