import { Scene, GameObjects } from 'phaser';

export class MainMenu extends Scene
{
    background: GameObjects.Image;
    logo: GameObjects.Image;
    title: GameObjects.Text;

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
}
