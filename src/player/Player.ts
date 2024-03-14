export abstract class Player extends Phaser.Physics.Matter.Sprite {
    constructor(scene: Phaser.Scene, x: number, y: number, texture: string, frame?: string | number) {
        super(scene.matter.world, x, y, texture, frame);
        scene.add.existing(this);
        scene.physics.add.existing(this);
    }

    getBody() {
        return this.body;
    }

    log() {
        console.log(this);
    }

    abstract defineAnimations(): void;
}