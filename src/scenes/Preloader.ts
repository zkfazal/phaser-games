import { Scene } from 'phaser';

export class Preloader extends Scene
{
    constructor ()
    {
        super('Preloader');
    }

    init ()
    {
        //  We loaded this image in our Boot Scene, so we can display it here
        this.add.image(512, 384, 'background');

        //  A simple progress bar. This is the outline of the bar.
        this.add.rectangle(512, 384, 468, 32).setStrokeStyle(1, 0xffffff);

        //  This is the progress bar itself. It will increase in size from the left based on the % of progress.
        const bar = this.add.rectangle(512-230, 384, 4, 28, 0xffffff);

        //  Use the 'progress' event emitted by the LoaderPlugin to update the loading bar
        this.load.on('progress', (progress: number) => {

            //  Update the progress bar (our bar is 464px wide, so 100% = 464px)
            bar.width = 4 + (460 * progress);

        });
    }

    preload ()
    {
        //  Load the assets for the game - Replace with your own assets
        this.load.setPath('assets');

        this.load.image('logo', 'logo.png');

        // Add the feamle brawler assets:
        this.load.multiatlas('female_brawler', 'female_brawler.json');

        // Add the title scene background
        this.load.image('mainmenu_001', 'titleScene/mainmenu_001.gif');
        this.load.image('mainmenu_002', 'titleScene/mainmenu_002.gif');
        this.load.image('mainmenu_003', 'titleScene/mainmenu_003.gif');
        this.load.image('mainmenu_004', 'titleScene/mainmenu_004.gif');

        // Add the font files. This is mainly for the title screen to make it look cool
        this.load.font("dragon_tff", "fonts/dragon.ttf");
        this.load.font("dragon_woff", "fonts/dragon.woff");
        // this.load.font("dragon_woff2", "fonts/dragon.woff2");
    }

    create ()
    {
        //  When all the assets have loaded, it's often worth creating global objects here that the rest of the game can use.
        //  For example, you can define global animations here, so we can use them in other scenes.

        //  Move to the MainMenu. You could also swap this for a Scene Transition, such as a camera fade.
        this.scene.start('MainMenu');
    }

    // loadFont(name: string, url: string): Promise<any> {
    //     const newFont = new FontFace(name, `url(${url})`);
    //     return newFont.load().then((loaded: any) => {
    //         document.fonts.add(loaded);
    //     }).catch((error: any) => {
    //         return error;
    //     });
    // }
}
