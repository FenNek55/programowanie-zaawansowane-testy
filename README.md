# programowanie-zaawansowane-testy

Projekt stworzony na potrzeby przedmiotu programowanie zaawansowane

# Instalacja i uruchomienie lokalnego środowiska

Do uruchomienia projektu wymagany jest zainstalowany Node.js w wersji 19.

```
npm i
npm run dev
```

# Uruchomienie testów jednostkowych

```
npm run test:unit
```

# Uruchomienie testów end-to-end/integracyjnych

```
npm run test:e2e:dev
```

# Struktura aplikacji

Aplikacja składa się z 3 głównych komponentów:

- `TodoItem` - pojedynczy element listy zadań
- `TodoForm` - formularz do dodawania nowych zadań
- `MainView` - główny widok aplikacji, zawiera listę zadań oraz formularz do dodawania nowych zadań

Aplikacja korzysta z biblioteki `pinia` do zarządzania stanem aplikacji. Dodatkowo, przechowuje ona stan aplikacji w `localStorage` przeglądarki.

# Scenariusze testowe

## Testy jednostkowe

Testy jednostkowe sprawdzają poprawność działania poszczególnych komponentów aplikacji poprzez montowanie ich w oprogramowaniu testowym (vitest) i sprawdzaniu czy wyświetlają się poprawnie oraz czy reagują na interakcje użytkownika.

## Testy integracyjne/end-to-end

Testy integracyjne sprawdzają poprawność działania aplikacji poprzez symulowanie zachowania użytkownika (klikanie, wpisywanie tekstu) i sprawdzanie czy aplikacja reaguje poprawnie na te interakcje. Wykorzystujemy do tego bibliotekę cypress. Testy te są uruchamiane na żywo, a ich wyniki są wizualizowane w oknie przeglądarki. Test przewiduje wejście na stronę główną, upewnienie się o poprawnym renderowaniu strony, dodaniu elementu do listy zadań, sprawdzeniu czy element został dodany do listy zadań oraz sprawdzenie czy element został usunięty z listy zadań.

# Wykorzystane narzędzia

- [Vite](https://vitejs.dev/) - szybkie narzędzie do tworzenia aplikacji Vue.js
- [Pinia](https://pinia.esm.dev/) - biblioteka do zarządzania stanem aplikacji
- [Cypress](https://www.cypress.io/) - biblioteka do testów end-to-end
- [Vue](https://v3.vuejs.org/) - biblioteka do tworzenia aplikacji webowych