# gilded-rose

## Specification

Bonjour et bienvenue dans l'équipe Gilded Rose. Comme vous le savez, nous sommes une petite auberge bénéficiant d'un emplacement de choix dans une ville importante, dirigée par une sympathique aubergiste nommée Allison.
ville importante, dirigée par une aubergiste sympathique du nom d'Allison. Nous n'achetons et ne vendons que les produits les plus raffinés.
Malheureusement, la qualité de nos produits ne cesse de se dégrader à mesure qu'ils approchent de leur date de péremption. Nous avons mis en place un système de mise à jour de nos produits.
avons mis en place un système qui met à jour notre inventaire à notre place. Il a été mis au point par un type sans état d'âme du nom de
Leeroy, qui est parti vers de nouvelles aventures. Votre tâche consiste à ajouter la nouvelle fonctionnalité à notre système afin que nous puissions commencer à vendre une nouvelle catégorie de produits.
pour que nous puissions commencer à vendre une nouvelle catégorie d'articles. Tout d'abord, une introduction à notre système :

    - Tous les articles ont une valeur SellIn qui indique le nombre de jours dont nous disposons pour vendre l'article.
    - Tous les objets ont une valeur de qualité qui indique la valeur de l'objet.
    - À la fin de chaque journée, notre système réduit les deux valeurs pour chaque objet.

C'est assez simple, n'est-ce pas ? C'est là que les choses deviennent intéressantes :

    - Une fois la date de péremption dépassée, la qualité se dégrade deux fois plus vite.
    - La qualité d'un produit n'est jamais négative
    - Le "Brie vieilli" gagne en qualité au fur et à mesure qu'il vieillit.
    - La qualité d'un produit n'est jamais supérieure à 50
    - Le "Sulfuras", étant un objet légendaire, n'a jamais besoin d'être vendu et sa qualité ne diminue jamais.
    - Les "Passes pour les coulisses", comme le brie vieilli, augmentent leur qualité au fur et à mesure que leur valeur de vente approche ;
    La qualité augmente de 2 lorsqu'il y a 10 jours ou moins et de 3 lorsqu'il y a 5 jours ou moins mais
    La qualité tombe à 0 après le concert

Nous avons récemment signé un contrat avec un fournisseur d'articles de prestidigitation. Cela nécessite une mise à jour de notre système :

    - Les objets "conjurés" se dégradent en qualité deux fois plus vite que les objets normaux.

N'hésitez pas à modifier la méthode UpdateQuality et à ajouter du code tant que tout fonctionne correctement.
fonctionne correctement. Cependant, ne modifiez pas la classe Item ou la propriété Items, car elles appartiennent au gobelin du coin qui se chargera de les modifier.
gobelin dans le coin qui va se mettre en colère et vous tirer dessus car il ne croit pas à la propriété partagée du code.
(vous pouvez rendre la méthode UpdateQuality et la propriété Items statiques si vous le souhaitez, nous nous en chargerons).
pour vous.

Pour clarifier les choses, un objet ne peut jamais voir sa qualité augmenter au-delà de 50, mais "Sulfuras" est un objet légendaire et, en tant que tel, sa qualité est supérieure à 50.
Sulfuras" est un objet légendaire et, en tant que tel, sa qualité est de 80 et ne change jamais.
