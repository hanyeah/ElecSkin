/**
 * Created by hanyeah on 2019/9/21.
 */
namespace hanyeah.elec{
    export interface ISkinPoint {
        x: number;
        y: number;
    }
    export interface ISKinTexture {
        source: string;
        anchor: string;
        rotate: number;
    }
    export interface ISkin {
        bg:ISKinTexture;
        terminal0: ISkinPoint;
        terminal1: ISkinPoint;
    }

    export interface ISkinBattery extends ISkin{

    }

    export interface ISkinResistance extends ISkin{
        
    }

    export interface ISkinSingleSwitch extends ISkin{
        knife: ISKinTexture;
    }

}