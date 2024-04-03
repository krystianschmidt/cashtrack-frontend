# Projekt aufsetzen

---
1. Leeren Ordner "cashtrack" erstellen
2. cleanproject hinzufügen
3. IntelliJ erkennt automatisch das Maven Script und führt es aus, sodass die Module erstellt werden
4. Ionic muss Global installiert sein ggf. installieren
5. Ionic Projekt erstellen `ionic start` / Projektname: "frontend"
6. frontend Projekt dann zu den IntelliJ Modulen hinzufügen
7. Run Configurations in IntelliJ anpassen, denn ng serve muss durch ionic serve ersetzt werden - in packeage.json im frontend unter "start"
8. zum frontend android hinzufügen (pfad zum frontend beachten)
9. android app updaten und starten
10. Das Handy muss unter Entwickleroptionen, "USB-Debugging" erlauben
11. cleanproject zu "backend" umbenennen - den ordner und das modul
12. Android App name von frontend zu "CashTrack" geändert - in string.xml "title_activity_main"
13. Git zu backend und frontend hinzufügen

---

## Ionic installieren
https://ionicframework.com/docs/

`npm install -g @ionic/cli`

## Android Studio installieren
https://developer.android.com/studio

## Ionic Projekt zu Beginn erstellen
Muss nur zu Beginn gemacht werden

`ionic start`

## Android App zu Beginn erstellen
Muss nur zu Beginn gemacht werden

`ionic capacitor add android`

## Setup
 
- Zwei Git Repos (Frontend / Backend)
- Backend: Spring 
- Frontend: Ionic auf Angular
- DB: MariaDB

---


# Genrelles Vorgehen

---

## Android App updaten
````
ionic capacitor copy android
````

````
ionic capacitor sync android
````

## Starte die Ionic Applikation
`ionic serve`

## Browser Link
http://localhost:8100

## Android Studio öffnen
````
ionic cap open android
````


Dort schließe ich das Handy an und wähle es als Device aus, starte es und App öffnet sich automatisch auf dem Handy
