# Tennis-game
PL:
Gra tennis stworzona przy pomocy canvas.
Rysowanie(kolorowanie), ustawienie i czyszczenie poszczególnych funkcji gry w odpowiednich momentach za pomocą (kolejno): fill/strokeStyle, fillRect/arc, clear.
Odbijanie piłeczki od paletek lub kontakt ze ścianami bocznymi jest równoznaczny jako punkt dla poszczególnej ze stron (funckcja Ball()).
Przyspieszenie piłeczki przy każdym kontakcie z paletką o 1.15 w osi X oraz o 1.1 w osi Y, prędkość nie przekracza "12" gdyż potem gra staję się agrywalna.
Poruszanie systemu ai poprzez funkcję positionofComputer(). Możliwość zwiększenia/zmniejszenia szybkość ai - wystarczy zwiększyć/zmniejszyć podane wartości w linijkach - 143,147,151 i 154.
Resetowanie piłki w miejscu środka paletki gracza.
Przy każdym zdobytym punkcie jest on dodawany do tablicy wyników po prawej lub lewej stronie za pomocą preinkrementacji.
Po zdobyciu której ze stron, wyświetlenie odp. komunikatu oraz reset gdy za pomocą location.reload().

EN:
A tennis game made with a canvas.
Drawing (coloring), setting and cleaning individual game functions at the right moments using (sequentially): fill / strokeStyle, fillRect / arc, clear.
Bouncing the ball off the rackets or contact with the side walls is the same as a point for a particular side (Ball () function).
The ball acceleration with each contact with the paddle by 1.15 in the X axis and by 1.1 in the Y axis, the speed does not exceed "12" because then the game becomes aggressive.
Moving the ai system through the positionofComputer () function. Possibility to increase / decrease the speed of ai - it is enough to increase / decrease the given values in the lines - 143,147,151 and 154.
Resetting the ball at the center of the player's racket.
Each time a point is scored, it is added to the scoreboard on the right or left by pre-incrementing.
After retrieving either page, display the reply message and reset when using location.reload ().
