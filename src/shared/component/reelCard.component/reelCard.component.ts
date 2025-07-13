import { Component, Input } from "@angular/core";
import { Ireel } from "src/app/models/reels.interface";

@Component({
    selector : 'app-reelCard',
    templateUrl : "./reelCard.component.html",
    styleUrls : ["./reelCard.component.scss"]
})
export class ReelsCardComponent{
@Input() reelCard !: Ireel;

onLikeReel(){
    if(this.reelCard.isLike){
        this.reelCard.isLike = false;
        this.reelCard.likeCount--
    }else{
        this.reelCard.isLike = true;
        this.reelCard.likeCount++
    }
}
}