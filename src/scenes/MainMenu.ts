import { Scene, GameObjects } from 'phaser';
import MergedInput from 'phaser3-merged-input';
import { InputController } from '../controller/InputController';

export class MainMenu extends Scene
{
    background: GameObjects.Image;
    logo: GameObjects.Image;
    title: GameObjects.Text;
    public mergedInput?: MergedInput;
    inputController: InputController;
    player1: any;
    player2: any;
    players: any[];

    constructor ()
    {
        super('MainMenu');
    }

    create ()
    {
        /*this.input.once('pointerdown', () => {

            this.scene.start('Game');

        });*/

        const { width, height } = this.scale; 

        this.anims.create(
            {
                key: 'mainmenu',
                frames: [
                    { key: 'mainmenu_001' },
                    { key: 'mainmenu_002' },
                    { key: 'mainmenu_003' },
                    { key: 'mainmenu_004' },
                ],
                frameRate: 15,
                repeat: -1
            });
        this.add.sprite(0, 0, 'mainmenu_001').setOrigin(0, 0).play('mainmenu');

        // Get the input controller scene, which contains our player objects
        this.inputController = this.scene.get('InputController');

        // Get our player objects
        this.player1 = this.inputController.player1;
        this.player2 = this.inputController.player2;

        // Set up an array of player objects
        this.players = [this.player1, this.player2]

        // Add the input keys

        // keyboard_keydown, keyboard_keyup, gamepad_buttondown, gamepad_directiondown,
        // gamepad_buttonup, gamepad_directionup, down, up, pointer_down, pointer_up, 
        this.inputController.mergedInput?.events.on('gamepad_keydown', ({key, player}) => {
            //console.log(`Player: ${event} entered: ${event}!`);
            console.log(this.inputController.mergedInput?.getPlayerIndexFromKey(key));
            let pressedButton = this.inputController.mergedInput?.getPlayerButtonFromKey(key);

            console.log(key, player, pressedButton);

        });

        // This section is for adding the title and main menu options

        console.log(width/12, width/4+50, width/3+25, width/3+100, height);

        this.add.text(width/2, height/6, 'Brutal Brawl', {
            fontFamily: 'dragon_woff', fontSize: 160, color: '#ffffff',
            stroke: '#ff0000', strokeThickness: 8,
            align: 'center'
        }).setOrigin(0.5, 0.5).setShadow(15, 15, "#111111", 4, true, true);

        this.add.text(width/2, height/2, 'Classic', {
            fontFamily: 'dragon_woff', fontSize: 70, color: '#800000',
            stroke: '#111111', strokeThickness: 2,
            align: 'center'
        }).setOrigin(0.5, 0.5);

        this.add.text(width/2, height/2+75, 'Survive', {
            fontFamily: 'dragon_woff', fontSize: 70, color: '#000000',
            stroke: '#111111', strokeThickness: 0,
            align: 'center'
        }).setOrigin(0.5, 0.5);

        this.add.text(width/2, height/2+150, 'Options', {
            fontFamily: 'dragon_woff', fontSize: 70, color: '#000000',
            stroke: '#111111', strokeThickness: 0,
            align: 'center'
        }).setOrigin(0.5, 0.5);

        console.log(this.input.gamepad?.getAll());
    }

    selectButton(index: number)
    {
        // TODO
    }

    selectNextButton(change = 1)
    {
        // TODO
    }

    confirmSelection()
    {
        // TODO
    }

    update(time: number, delta: number): void {
        //console.log(this.player1, this.player2);
        if (this.player2.interaction_mapped.isPressed(['DOWN', 'LC_S']) || this.player1.interaction_mapped.isPressed(['DOWN', 'LC_S'])) {
            console.log("down");
            this.selectNextButton(1)
        }
        else if (this.player2.interaction_mapped.isPressed(['UP', 'LC_N']) || this.player1.interaction_mapped.isPressed(['UP', 'LC_N'])) {
            console.log("up");
            this.selectNextButton(-1)
        }

        if( (this.player1.direction.LEFT > 0) || (this.player2.direction.LEFT > 0) ){
            console.log("left");
        }
    }
}
