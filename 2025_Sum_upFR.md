# 🚀 **Lombard Web Services 2025**

## Q1


### ⏱️ **ctime**

Un programme développé en langage [C] conçu pour remplacer la timestamp Unix qui s'est avérée un peu moins performante (en nanosecondes). Ce programme supporte les femtosecondes pour l'affichage de la timestamp.

**Note** : c'est avant toute chose un projet expérimental qui va calculer une timestamp a partir des cycles d'horloges des CPU (processeurs).   

La technique : je l'ai nommée "Timestamp cpu clock-cycle based computation and benchmark" permet d'évaluer la puissance d'un ou plusieurs processeurs à calculer un intervalle de temps très court a partir d'une instruction assembleur Time Stamp Counter présente dans la majorité de nos laptop et ordinateurs.

👉 Lien : [https://lnkd.in/deVt4t5p](https://lnkd.in/deVt4t5p)

---

### 📸 **Fullpage Screenshot OCR**

C'est un programme écrit en [bash] qui va permettre d'effectuer une capture d'ecran d'une page web distante, puis effectue une reconnaissance automatique de caractères (OCR) pour générer une image, un fichier texte, csv, ou html.

**Note** : Deux versions de ce programme ont été developpées, la première va utiliser wkhtmltoimage pour générer le fichier image (png) et la seconde va utiliser chromium headless qui permet l'affichage DOM.

👉 Lien : [https://t.co/DHrURmQGmp](https://t.co/DHrURmQGmp)

---

### 📊 **Dynamic CSV Table With search**

Un helper's script écrit en HTML qui permet de générer une table en html5, javascript, css3 a partir d'un fichier csv.

**Note** : Ce script possède un moteur de recherche par champs et une fonctionnalité de choix de colonnes lors de l'importation de csv.

👉 Lien : [https://t.co/99UbnKYhIZ](https://t.co/99UbnKYhIZ)

---

### 🛡️ **Socks5 Checker**

C'est un programme que j'ai développé en [python] qui permet de vérifier une liste de serveurs distant (socks5) à partir d'un ou plusieurs fichiers csv. Ce programme va effectuer un ping sur les ip (au format IPv4) et calculer le temps de réponse, la disponibilité, et géolocaliser approximativement.  

**Note**: Ce programme supporte également les listes de blocages.

👉 Lien : [https://t.co/fcn7SFzqWj](https://t.co/fcn7SFzqWj)

---

### 🧬 **PEtransfer**

Est un programme développé en langage [C] qui va permettre de transférer l'entête PE d'un fichier exécutable (type MS-DOS), vers un autre. Ce programme peut reconstituer la Section Table pour la transférer.  

**Note** : Une fonctionnalité qui permet la recherche et la copie de l'icone dans la table des ressources est également disponible.

👉 Lien : [https://t.co/wfxtSOj9Tl](https://t.co/wfxtSOj9Tl)

---

### 🧮 **Operateurs**

Est une liste au format [csv] des opérateurs arithmétiques, logiques, binaires, booléens d'une multitudes de langages de programmations (110).

**Note** : la description est livree en colonnes finales avec sa representation au format TeX.  

👉 Lien :  [https://t.co/TmGEbo9yRJ](https://t.co/TmGEbo9yRJ)

---

## Q2

### 💾 **Backup & Compress**
Un script [bash] pour effectuer des sauvegardes des dossiers images et videos sur les telephones android.

**Note** : Il est capable de réduire un dossier de photo ou de vidéos de 50Gb en 5gb sans perdre en qualité.

👉 Lien : [https://t.co/Tkz7FXOkcE](https://t.co/Tkz7FXOkcE)

---

### 📡 **Meta transfer**

Un script [bash] qui permet de transférer les métadonnées récursivement d'un ou plusieurs fichiers a la volée.

**Note** : Utile pour reconstituer les métadonnées, ces données "cachées" dans les images qui sont utilisées pour la gestion des contextes géographique, matériel...

👉 Lien : [https://t.co/CRmQbOYGXz](https://t.co/CRmQbOYGXz)

---

### 🕒 **Meta Refresh**
Un script développé en [bash] et [C] qui permet de réactualiser les dates de création et de modification présente dans les images.

**Note** : Le mode heuristique permet de chercher dans le fichier une chaîne de caractère contenant le mot clé "date" à l'intérieur des métadonnées pour le modifier.

👉 Lien : [https://t.co/JtF8uBGHng](https://t.co/JtF8uBGHng)

---

### 🗂️ **File Sort**  

Un programme développé en [bash] et en langage [C] qui permet d'effectuer un tri par date , et nom de fichiers, sur tous les fichiers dont la taille excède une taille spécifique en Mb.

**Note** : La version de ce programme que j'ai programme en C est plus rapide car elle utilise les fonctions natives.

👉 Lien : [https://t.co/NWYXLTFmuU](https://t.co/NWYXLTFmuU)  

---

### ☕ **Java Web Server Setup script**  

Un script [bash] qui permet de configurer l'installation d'un serveur web écrit en java en une seule ligne de code. Pour ensuite développer vos applis Java et vos pages web.

**Note** : Ce programme permet d'écrire automatiquement les fichiers de configuration pom, il possède un contrôleur REST, un fichier javascript d'exemple, et la base de donnée H2. L'installation s'effectue avec Spring et Maven.

👉 Lien : [https://t.co/5RW0p6p8bp](https://t.co/5RW0p6p8bp)  

---

### 🔐 **DKIM & PKCS12 Keygen**  
Un script [bash] qui va generer une cle DKIM cryptee en 2048 bit et PKCS 12 a partir des fichiers cles letsencrypt SSL.  

**Note** : PKCS12 est utile sur les serveurs imap qui permettent l'importation de certificats.

👉 Lien : [https://t.co/YupjejC04e](https://t.co/YupjejC04e)  

---

### 🔄 **Replace**

Un programme [bash] ou [C lang] en ligne de commande qui permet de remplacer une chaîne de caractère récursivement dans un ou plusieurs fichiers, un ou plusieurs dossier, un ou plusieurs noms de fichiers. 

**Note** : La version de ce programme qui est écrite en langage C s'affranchit des commandes shell find, rename, grep, sed et par conséquent est plus rapide à l'utilisation.

👉 Lien : [https://t.co/rDIE0OrQGg](https://t.co/rDIE0OrQGg)  

---

### 🗣️ **Spring Boot TTS web app with PostgreSQL**  

Un script [bash] one-liner configurateur et installateur d'une appli web Java permettant le text to speech.

**Note** : deux versions sont disponible, la première version utilise MBROLA TTS , et la seconde version utilise Pico TTS est plus fluide.
👉 Lien :  [https://t.co/JD2JkUMbLA](https://t.co/JD2JkUMbLA)

---

## Q3

### 🎙️ **Howdareyou**, une application d'analyse du spectre vocal (VSA analyse) de lecture de micro-tremblements.  
C'est une application écrite en langage C++ qui, grâce à la transformée de Fourier rapide va permettre d'analyser les micro-tremblements vocaux chez un interlocuteur (enregistre au format son, mp3, wav etc) et de dire si un mensonge manifeste par un stress vocal est détecté.

**Note** : une option qui permet de générer un fichier sous-titres (.srt) existe.

👉 Lien : [https://lnkd.in/e86UB9CB](https://lnkd.in/e86UB9CB)

---

### 📚 **Analyseur de Texte par genre**
Une appli web qui va permettre à partir d'un très petit corpus (>300 mots) d'analyser et évaluer le genre d'un texte instantanément.

C'est une application développée en HTML5, JavaScript, CSS3 d'analyse de texte minimaliste, dont les résultats sont bases sur plusieurs critères tel que le style d'écriture Formel , Informel.

**Note** : Le script qui marche en arrière plan va utiliser une technique d'analyse fréquentielle et des poids pré-calculés pour évaluer le genre statistiquement.

🇬🇧🇫🇷🇲🇦🇮🇱🇪🇸🇩🇪🇹🇷🇵🇹🇮🇳  
👉 Lien : [https://lnkd.in/edQY_UNT](https://lnkd.in/edQY_UNT)

---

### 📐 **Dist-framework**
dist-framework est un framework pour calculer et découvrir de nouvelles distances et métriques, dans le domaine de la recherche scientifique et du développement de technologies.

C'est au départ une méthodologie qui reprends une formule mathématique que j'avais découverte et présente dans mon passé (une meta-heuristique) permettant d'appliquer une fonction de précision sur une séquence, une matrice vectorielle , une matrice termes documents, ou des signaux. C'est devenu par la suite un script python permettant de découvrir de nouvelle formules mathématique de distances et de métriques en effectuant du fuzzy-matching et en appliquant des test dans l'Etat de l'Art.

**Note** : Le framework est purement expérimental, et nécessite d'être configuré et paramétré avant son utilisation. Celui-ci jette les bases sur les connaissances actuelles scientifiques en la matière.

👉 Lien : [https://lnkd.in/eUCKbz5b](https://lnkd.in/eUCKbz5b)

---

### 🌀 **La distance de Fibonacci**  
C'est une recherche scientifique que j'ai effectué sur la suite de Fibonacci et aboutissant à une métrique valide, que j'ai pu transformer en formule Mathématique.

La distance de Fibonacci permet de mesurer la similarité entre des séquences numériques ou vectorielles en se basant sur les propriétés mathématiques de la suite de Fibonacci. C'est une métrique qui évalue la conformité des séquences a des modèles mathématiques spécifiques liés aux propriétés de Fibonacci. 

**Note** : Distance de Fibonacci transcende les domaines scientifiques tels que l'Economie, la Finance, les Mathématiques, l'Astrophysique, la Biologie ...

📄 **Paper / Article**
👉 🇬🇧 : tinyurl.com/fendist  
👉 🇫🇷 : tinyurl.com/fibofrdist

---

### 🔬 **Formalisation des techniques de précision en informatique computationnelle et sciences informatiques**  
Proposition mathématique pour le calcul de précision dans les domaines de l'optimisation (IA), du calcul des distances et des métriques, avec l'utilisation d'une métaheuristique dans le cadre du projet **dist-framework**.  
🔗 [https://lnkd.in/e6u-dPPR](https://lnkd.in/e6u-dPPR)

---

### 📐 **Transformation geometrique pour l'holographie**
Utilisation du modulo 2π (bi-dimensionnel) pour expliquer la rotation lors de la simulation holographique type pyramide, dans le projet **HOLO2NET**, avec mise à jour du script en ligne de commande.  
🔗 [https://lnkd.in/eaSrEDwu](https://lnkd.in/eaSrEDwu)

---

### 📚 **Depot GitHub de documentations techniques (🇫🇷/🇬🇧)**  
Murs Scientifiques : équations, découvreurs, nationalités, applications…  
Points forts et limites de la lecture de fichiers locaux Web sur Android  
Techniques de télémétrie pour apps Android  
Ressources pour le Prompt Engineering  
Guide complet des méthodes de paiement pour monétiser les extensions **Chrome Web Store**  
🔗 [https://lnkd.in/eYPkKi2N](https://lnkd.in/eYPkKi2N)

---

### 🔐 **Serveur de telemétrie securise sur Android (API 26+)**  

Programmation d'un serveur pour collecter les données télémétriques des utilisateurs d'applications Android, en utilisant **Python** pour le backend, **Kotlin** pour l'app native et **PostgreSQL** pour la base de données.  

🔗 [https://lnkd.in/eRzzrbhq](https://lnkd.in/eRzzrbhq)

---

### 🌍 **Multilangage Privacy Policy Generator (HTML/JS)**  
Page web multilingue générant automatiquement une politique de confidentialité pour une app ou un site, via simples paramètres d'URL.  
🔗 [https://lnkd.in/e_D4y_C3](https://lnkd.in/e_D4y_C3)

---

### 🖩 **Calculatrice en Racket**  

Une calculatrice écrite en **Racket**, langage de programmation pour langage de programmation dérivé de LISP, utilisé notamment par **Naughty Dog** pour le prototypage de jeux vidéo.  

🔗 [https://lnkd.in/ek6q7KFS](https://lnkd.in/ek6q7KFS)

---

### ⚙️ **Generateur de sequence BigNum en Assembleur**  
Générateur de grands nombres pour la suite de Fibonacci en assembleur, dans le domaine **HPC & haute précision**. Technique inédite pour débruiter la suite lorsqu'elle atteint plusieurs Gb.  
🔗 [https://lnkd.in/e8uWdYmU](https://lnkd.in/e8uWdYmU)

---

### 💰 **Pricetable et serveur python securise pour Stripe**  
Une table de prix pour monétiser les sites et applications avec **Stripe**. Développement du serveur sécurisé pour le paiement **Stripe** en backend en **python** ainsi qu'un Material design html css pour afficher la pricetable.  
🔗 [https://lnkd.in/eX8WNchs](https://lnkd.in/eX8WNchs)

---
## Q4

### ✨ Quantum Reports — Hardware & Software Operations

Rapport technique transversal où **physique, logiciel et hardware** se rencontrent.
Analyse d’optimisations réelles : gains mesurés, instructions **SIMD / ASM**, et implémentations concrètes en conditions opérationnelles.

Langue : 🇫🇷 Français
🔗 : [https://lnkd.in/dDCxmDvr](https://lnkd.in/dDCxmDvr)

---

### 🧮 Solveur Lorentzien avec Cauchy Loss — IRLS + L-BFGS (Deep Learning)

Algorithme d’optimisation **robuste aux données aberrantes**, basé sur une approximation quasi-lorentzienne via **IRLS**.
Compatible avec des **modèles complexes et profonds**, intégrable dans des pipelines ML/DL modernes.

🔗 : [https://lnkd.in/di4qJQK5](https://lnkd.in/di4qJQK5)

---

### 🐝 Visualisation symplectique hexagonale

Interface interactive dédiée à l’**analyse spectrale robuste** en environnement radar.
Tests appliqués : **LDA**, espace des phases, modèles **gaussiens**.

🔗 : [https://lnkd.in/dGNbxeYu](https://lnkd.in/dGNbxeYu)

---

### 🌌 Phénomènes obéissant à la loi en inverse carré (1/r²)

Compilation exhaustive de **150 phénomènes physiques et cosmologiques** dont l’intensité suit une loi en (1/r^2).
Référence transversale pour la physique classique, relativiste et cosmologique.

Langue : 🇫🇷 Français
🔗 : [https://lnkd.in/dpjXJsU5](https://lnkd.in/dpjXJsU5)

---

### 💡 Cartographie spectrale des mécanismes d’émission de la lumière

Décomposition physique et spectrale des mécanismes d’émission :
**photoluminescence, électroluminescence, sonoluminescence**, etc.
Analyse des bandes spectrales typiques et de leurs origines microscopiques.

Langue : 🇫🇷 Français
🔗 : [https://lnkd.in/dYFhinZV](https://lnkd.in/dYFhinZV)

---

### 🌊 Sonoluminescence — Signature thermodynamique de la lumière

Exploration avancée du phénomène via :

* transport optimal
* information de Fisher
* thermodynamique statistique

Mise en évidence d’une **signature thermodynamique** associée à l’émission lumineuse.

🔗 : [https://lnkd.in/dTukYTei](https://lnkd.in/dTukYTei)

---

### 🎥 Stable Diffusion, I2VGen, SVD — Panorama 2025

État de l’art 2025 des outils **open-source et SaaS** pour la génération vidéo par diffusion :

* SVD 2.0

* I2VGen-XL

* AnimateDiff

* et écosystèmes associés

Langue : 🇫🇷 Français
🔗 : [https://lnkd.in/dYXpD6nC](https://lnkd.in/dYXpD6nC)

---

### 🎬 Master the Language of 7th Art — PoV & Camera Movement Classification

Taxonomie cinématographique détaillée :

* mouvements de caméra
* cadrages
* effets subjectifs
* plans-séquences

Outil de référence pour **cinéma, IA générative et analyse visuelle**.

Langue : 🇫🇷 Français
🔗 : [https://lnkd.in/dzD5Nqzk](https://lnkd.in/dzD5Nqzk)

---

### ⚙️ Méthodes d’Optimisation en Machine Learning & Deep Learning

Comparaison structurée des principales méthodes d’optimisation :

* convergence
* mémoire
* conditionnement
* diffusion
* nature mathématique

Guide transversal pour chercheurs et ingénieurs ML.

Langue : 🇫🇷 Français
🔗 : [https://lnkd.in/d_esKsZe](https://lnkd.in/d_esKsZe)

🌍 Versions linguistiques

⚠️ **Pour accéder aux versions anglaises 🇬🇧** :
Remplacer `FR` par `EN` dans l’URL de chaque lien.

---

*© 2025 — Lombard Web Services*
