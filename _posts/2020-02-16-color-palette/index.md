---
layout: blog/post
title:  "Color Palette"
date:   2020-02-16 00:01:00 -0800
categories: development
permalink: /posts/color-palette
featured: true
description: >
    Lately, I've been thinking about crayons a lot and how 16 crayons in a box
    is  nothing like the 16,777,216 possible RGB colors. So I'm just poking
    around for some middle ground.
---

### 100 Colors

After years of playing with color pickers and palette generators I found I'm generally disatisfied afterwards. But using a box of 16 crayons, you can control the shade and tint by just pressing down harder or lighter.

Trying to apply that to this palette, I've chosen 100 distinct colors.

There are 14 hues with 7 various saturation and lightness values. Moving from dark to light:

Shadow, Metallic, Moonlit, True Color, Sunlit, Pastel, Highlight.

14 hues times 7 variants = 98 colors + black and white.

So if this were a box of crayons, the 16 crayons in the box are:

Red, Flame, Orange, Amber, Yellow, Chartruese, Green, Aqua, Blue, Indigo, Violet, Fuschia, Magenta, Silver, Black and White.



<iframe id="color-palette-example"></iframe>
<div class="u-hidden" id="color-palette-example-css">
    .color-row {
        display: flex;
        justify-content: space-around;
    }
    .color {
        flex: 1 0 auto;
    }
    .color:before {
        content:'';
        float: left;
        padding-top:100%;
    }

    html {
        --black: hsla(180, 0%, 0%, 1);
        --white: hsla(180, 0%, 100%, 1);

        --red1: hsla(355, 100%, 8%, 1);
        --red2: hsla(355, 75%, 22%, 1);
        --red3: hsla(355, 85%, 36%, 1);
        --red4: hsla(355, 100%, 55%, 1);
        --red5: hsla(355, 85%, 64%, 1);
        --red6: hsla(355, 85%, 78%, 1);
        --red7: hsla(355, 100%, 92%, 1);


        --flame1: hsla(15, 100%, 8%, 1);
        --flame2: hsla(15, 75%, 22%, 1);
        --flame3: hsla(15, 85%, 36%, 1);
        --flame4: hsla(15, 95%, 50%, 1);
        --flame5: hsla(15, 85%, 64%, 1);
        --flame6: hsla(15, 85%, 78%, 1);
        --flame7: hsla(15, 100%, 92%, 1);


        --orange1: hsla(30, 100%, 8%, 1);
        --orange2: hsla(30, 75%, 22%, 1);
        --orange3: hsla(30, 85%, 36%, 1);
        --orange4: hsla(30, 100%, 50%, 1);
        --orange5: hsla(30, 85%, 64%, 1);
        --orange6: hsla(30, 85%, 78%, 1);
        --orange7: hsla(30, 100%, 92%, 1);


        --amber1: hsla(45, 100%, 8%, 1);
        --amber2: hsla(45, 75%, 22%, 1);
        --amber3: hsla(45, 85%, 36%, 1);
        --amber4: hsla(45, 100%, 50%, 1);
        --amber5: hsla(45, 85%, 64%, 1);
        --amber6: hsla(45, 85%, 78%, 1);
        --amber7: hsla(45, 100%, 92%, 1);


        --yellow1: hsla(60, 100%, 8%, 1);
        --yellow2: hsla(60, 75%, 22%, 1);
        --yellow3: hsla(60, 85%, 36%, 1);
        --yellow4: hsla(60, 100%, 50%, 1);
        --yellow5: hsla(60, 85%, 64%, 1);
        --yellow6: hsla(60, 85%, 78%, 1);
        --yellow7: hsla(60, 100%, 92%, 1);


        --chartruese1: hsla(75, 100%, 8%, 1);
        --chartruese2: hsla(75, 75%, 22%, 1);
        --chartruese3: hsla(75, 85%, 36%, 1);
        --chartruese4: hsla(75, 100%, 50%, 1);
        --chartruese5: hsla(75, 85%, 64%, 1);
        --chartruese6: hsla(75, 85%, 78%, 1);
        --chartruese7: hsla(75, 100%, 92%, 1);


        --green1: hsla(120, 100%, 8%, 1);
        --green2: hsla(120, 75%, 22%, 1);
        --green3: hsla(120, 85%, 36%, 1);
        --green4: hsla(120, 100%, 50%, 1);
        --green5: hsla(120, 85%, 64%, 1);
        --green6: hsla(120, 85%, 78%, 1);
        --green7: hsla(120, 100%, 92%, 1);


        --aqua1: hsla(160, 100%, 8%, 1);
        --aqua2: hsla(160, 75%, 22%, 1);
        --aqua3: hsla(160, 85%, 36%, 1);
        --aqua4: hsla(160, 100%, 50%, 1);
        --aqua5: hsla(160, 85%, 64%, 1);
        --aqua6: hsla(160, 85%, 78%, 1);
        --aqua7: hsla(160, 100%, 92%, 1);


        --blue1: hsla(200, 100%, 8%, 1);
        --blue2: hsla(200, 75%, 22%, 1);
        --blue3: hsla(200, 85%, 36%, 1);
        --blue4: hsla(200, 100%, 50%, 1);
        --blue5: hsla(200, 85%, 64%, 1);
        --blue6: hsla(200, 85%, 78%, 1);
        --blue7: hsla(200, 100%, 92%, 1);


        --indigo1: hsla(230, 100%, 8%, 1);
        --indigo2: hsla(230, 75%, 22%, 1);
        --indigo3: hsla(230, 75%, 36%, 1);
        --indigo4: hsla(230, 80%, 55%, 1);
        --indigo5: hsla(230, 65%, 64%, 1);
        --indigo6: hsla(230, 85%, 78%, 1);
        --indigo7: hsla(230, 100%, 92%, 1);


        --violet1: hsla(270, 100%, 8%, 1);
        --violet2: hsla(270, 75%, 22%, 1);
        --violet3: hsla(270, 85%, 36%, 1);
        --violet4: hsla(270, 100%, 55%, 1);
        --violet5: hsla(270, 85%, 64%, 1);
        --violet6: hsla(270, 85%, 78%, 1);
        --violet7: hsla(270, 100%, 92%, 1);


        --fuschia1: hsla(290, 100%, 8%, 1);
        --fuschia2: hsla(290, 75%, 22%, 1);
        --fuschia3: hsla(290, 85%, 36%, 1);
        --fuschia4: hsla(290, 100%, 55%, 1);
        --fuschia5: hsla(290, 85%, 64%, 1);
        --fuschia6: hsla(290, 85%, 78%, 1);
        --fuschia7: hsla(290, 100%, 92%, 1);

        --magenta1: hsla(330, 100%, 8%, 1);
        --magenta2: hsla(330, 75%, 22%, 1);
        --magenta3: hsla(330, 85%, 36%, 1);
        --magenta4: hsla(330, 100%, 55%, 1);
        --magenta5: hsla(330, 85%, 64%, 1);
        --magenta6: hsla(330, 85%, 78%, 1);
        --magenta7: hsla(330, 100%, 92%, 1);


        --silver1: hsla(180, 10%, 2%, 1);
        --silver2: hsla(180, 10%, 18%, 1);
        --silver3: hsla(180, 10%, 34%, 1);
        --silver4: hsla(180, 10%, 50%, 1);
        --silver5: hsla(180, 10%, 66%, 1);
        --silver6: hsla(180, 10%, 82%, 1);
        --silver7: hsla(180, 10%, 98%, 1);
    }

    .black {
        background: var(--black);
    }
    .white {
        background: var(--white);
    }


    .red1 {
        background: var(--red1);
    }
    .red2 {
        background: var(--red2);
    }
    .red3 {
        background: var(--red3);
    }
    .red4 {
        background: var(--red4);
    }
    .red5 {
        background: var(--red5);
    }
    .red6 {
        background: var(--red6);
    }
    .red7 {
        background: var(--red7);
    }


    .flame1 {
        background: var(--flame1);
    }
    .flame2 {
        background: var(--flame2);
    }
    .flame3 {
        background: var(--flame3);
    }
    .flame4 {
        background: var(--flame4);
    }
    .flame5 {
        background: var(--flame5);
    }
    .flame6 {
        background: var(--flame6);
    }
    .flame7 {
        background: var(--flame7);
    }


    .orange1 {
        background: var(--orange1);
    }
    .orange2 {
        background: var(--orange2);
    }
    .orange3 {
        background: var(--orange3);
    }
    .orange4 {
        background: var(--orange4);
    }
    .orange5 {
        background: var(--orange5);
    }
    .orange6 {
        background: var(--orange6);
    }
    .orange7 {
        background: var(--orange7);
    }


    .amber1 {
        background: var(--amber1);
    }
    .amber2 {
        background: var(--amber2);
    }
    .amber3 {
        background: var(--amber3);
    }
    .amber4 {
        background: var(--amber4);
    }
    .amber5 {
        background: var(--amber5);
    }
    .amber6 {
        background: var(--amber6);
    }
    .amber7 {
        background: var(--amber7);
    }


    .yellow1 {
        background: var(--yellow1);
    }
    .yellow2 {
        background: var(--yellow2);
    }
    .yellow3 {
        background: var(--yellow3);
    }
    .yellow4 {
        background: var(--yellow4);
    }
    .yellow5 {
        background: var(--yellow5);
    }
    .yellow6 {
        background: var(--yellow6);
    }
    .yellow7 {
        background: var(--yellow7);
    }


    .chartruese1 {
        background: var(--chartruese1);
    }
    .chartruese2 {
        background: var(--chartruese2);
    }
    .chartruese3 {
        background: var(--chartruese3);
    }
    .chartruese4 {
        background: var(--chartruese4);
    }
    .chartruese5 {
        background: var(--chartruese5);
    }
    .chartruese6 {
        background: var(--chartruese6);
    }
    .chartruese7 {
        background: var(--chartruese7);
    }


    .green1 {
        background: var(--green1);
    }
    .green2 {
        background: var(--green2);
    }
    .green3 {
        background: var(--green3);
    }
    .green4 {
        background: var(--green4);
    }
    .green5 {
        background: var(--green5);
    }
    .green6 {
        background: var(--green6);
    }
    .green7 {
        background: var(--green7);
    }


    .aqua1 {
        background: var(--aqua1);
    }
    .aqua2 {
        background: var(--aqua2);
    }
    .aqua3 {
        background: var(--aqua3);
    }
    .aqua4 {
        background: var(--aqua4);
    }
    .aqua5 {
        background: var(--aqua5);
    }
    .aqua6 {
        background: var(--aqua6);
    }
    .aqua7 {
        background: var(--aqua7);
    }


    .blue1 {
        background: var(--blue1);
    }
    .blue2 {
        background: var(--blue2);
    }
    .blue3 {
        background: var(--blue3);
    }
    .blue4 {
        background: var(--blue4);
    }
    .blue5 {
        background: var(--blue5);
    }
    .blue6 {
        background: var(--blue6);
    }
    .blue7 {
        background: var(--blue7);
    }


    .indigo1 {
        background: var(--indigo1);
    }
    .indigo2 {
        background: var(--indigo2);
    }
    .indigo3 {
        background: var(--indigo3);
    }
    .indigo4 {
        background: var(--indigo4);
    }
    .indigo5 {
        background: var(--indigo5);
    }
    .indigo6 {
        background: var(--indigo6);
    }
    .indigo7 {
        background: var(--indigo7);
    }


    .violet1 {
        background: var(--violet1);
    }
    .violet2 {
        background: var(--violet2);
    }
    .violet3 {
        background: var(--violet3);
    }
    .violet4 {
        background: var(--violet4);
    }
    .violet5 {
        background: var(--violet5);
    }
    .violet6 {
        background: var(--violet6);
    }
    .violet7 {
        background: var(--violet7);
    }


    .fuschia1 {
        background: var(--fuschia1);
    }
    .fuschia2 {
        background: var(--fuschia2);
    }
    .fuschia3 {
        background: var(--fuschia3);
    }
    .fuschia4 {
        background: var(--fuschia4);
    }
    .fuschia5 {
        background: var(--fuschia5);
    }
    .fuschia6 {
        background: var(--fuschia6);
    }
    .fuschia7 {
        background: var(--fuschia7);
    }


    .magenta1 {
        background: var(--magenta1);
    }
    .magenta2 {
        background: var(--magenta2);
    }
    .magenta3 {
        background: var(--magenta3);
    }
    .magenta4 {
        background: var(--magenta4);
    }
    .magenta5 {
        background: var(--magenta5);
    }
    .magenta6 {
        background: var(--magenta6);
    }
    .magenta7 {
        background: var(--magenta7);
    }


    .silver1 {
        background: var(--silver1);
    }
    .silver2 {
        background: var(--silver2);
    }
    .silver3 {
        background: var(--silver3);
    }
    .silver4 {
        background: var(--silver4);
    }
    .silver5 {
        background: var(--silver5);
    }
    .silver6 {
        background: var(--silver6);
    }
    .silver7 {
        background: var(--silver7);
    }
</div>
<div id="color-palette-example-html">
    <div class="color-row">
        <div class="color red1"></div>
        <div class="color red2"></div>
        <div class="color red3"></div>
        <div class="color red4"></div>
        <div class="color red5"></div>
        <div class="color red6"></div>
        <div class="color red7"></div>
    </div>
    <div class="color-row">
        <div class="color flame1"></div>
        <div class="color flame2"></div>
        <div class="color flame3"></div>
        <div class="color flame4"></div>
        <div class="color flame5"></div>
        <div class="color flame6"></div>
        <div class="color flame7"></div>
    </div>
    <div class="color-row">
        <div class="color orange1"></div>
        <div class="color orange2"></div>
        <div class="color orange3"></div>
        <div class="color orange4"></div>
        <div class="color orange5"></div>
        <div class="color orange6"></div>
        <div class="color orange7"></div>
    </div>
    <div class="color-row">
        <div class="color amber1"></div>
        <div class="color amber2"></div>
        <div class="color amber3"></div>
        <div class="color amber4"></div>
        <div class="color amber5"></div>
        <div class="color amber6"></div>
        <div class="color amber7"></div>
    </div>
    <div class="color-row">
        <div class="color yellow1"></div>
        <div class="color yellow2"></div>
        <div class="color yellow3"></div>
        <div class="color yellow4"></div>
        <div class="color yellow5"></div>
        <div class="color yellow6"></div>
        <div class="color yellow7"></div>
    </div>
    <div class="color-row">
        <div class="color chartruese1"></div>
        <div class="color chartruese2"></div>
        <div class="color chartruese3"></div>
        <div class="color chartruese4"></div>
        <div class="color chartruese5"></div>
        <div class="color chartruese6"></div>
        <div class="color chartruese7"></div>
    </div>
    <div class="color-row">
        <div class="color green1"></div>
        <div class="color green2"></div>
        <div class="color green3"></div>
        <div class="color green4"></div>
        <div class="color green5"></div>
        <div class="color green6"></div>
        <div class="color green7"></div>
    </div>
    <div class="color-row">
        <div class="color aqua1"></div>
        <div class="color aqua2"></div>
        <div class="color aqua3"></div>
        <div class="color aqua4"></div>
        <div class="color aqua5"></div>
        <div class="color aqua6"></div>
        <div class="color aqua7"></div>
    </div>
    <div class="color-row">
        <div class="color blue1"></div>
        <div class="color blue2"></div>
        <div class="color blue3"></div>
        <div class="color blue4"></div>
        <div class="color blue5"></div>
        <div class="color blue6"></div>
        <div class="color blue7"></div>
    </div>
    <div class="color-row">
        <div class="color indigo1"></div>
        <div class="color indigo2"></div>
        <div class="color indigo3"></div>
        <div class="color indigo4"></div>
        <div class="color indigo5"></div>
        <div class="color indigo6"></div>
        <div class="color indigo7"></div>
    </div>
    <div class="color-row">
        <div class="color violet1"></div>
        <div class="color violet2"></div>
        <div class="color violet3"></div>
        <div class="color violet4"></div>
        <div class="color violet5"></div>
        <div class="color violet6"></div>
        <div class="color violet7"></div>
    </div>
    <div class="color-row">
        <div class="color fuschia1"></div>
        <div class="color fuschia2"></div>
        <div class="color fuschia3"></div>
        <div class="color fuschia4"></div>
        <div class="color fuschia5"></div>
        <div class="color fuschia6"></div>
        <div class="color fuschia7"></div>
    </div>
    <div class="color-row">
        <div class="color magenta1"></div>
        <div class="color magenta2"></div>
        <div class="color magenta3"></div>
        <div class="color magenta4"></div>
        <div class="color magenta5"></div>
        <div class="color magenta6"></div>
        <div class="color magenta7"></div>
    </div>
    <div class="color-row">
        <div class="color silver1"></div>
        <div class="color silver2"></div>
        <div class="color silver3"></div>
        <div class="color silver4"></div>
        <div class="color silver5"></div>
        <div class="color silver6"></div>
        <div class="color silver7"></div>
    </div>
    <div class="color-row">
        <div class="color black"></div>
        <div class="color white"></div>
    </div>
</div>
<script type="text/javascript">
    window.tychi.queues.flyFrames.push([
        'color-palette-example',
        {
            markupIDs: ['color-palette-example-html'],
            styleIDs: ['color-palette-example-css']
        }
    ]);
</script>

Ideally, I'm done playing with color finding tools and by sticking to these 100 colors, my designs will hopefully have a sense of consistency, even across projects.
