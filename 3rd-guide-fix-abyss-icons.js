/**
  The MIT License (MIT)

  Copyright (c) 2021 Frostlight

  Permission is hereby granted, free of charge, to any person obtaining a copy of
  this software and associated documentation files (the "Software"), to deal in
  the Software without restriction, including without limitation the rights to
  use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
  the Software, and to permit persons to whom the Software is furnished to do so,
  subject to the following conditions:

  The above copyright notice and this permission notice shall be included in all
  copies or substantial portions of the Software.

  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
  FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
  COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
  IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
  CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
**/

// ==UserScript==
// @ids          3rdGuideFixAbyssIcons
// @name         3rd Guide: Fix Abyss Icons
// @namespace    http://tampermonkey.net/
// @version      1.0
// @author       Frostlight
// @description  Properly aligns the abyss icons on 3rd Guide so it works with the latest version of Google Chrome.
// @license      MIT; https://spdx.org/licenses/MIT.html
// @copyright	 2021, Frostlight (https://openuserjs.org/users/Frostlight)
// @homepageURL  https://github.com/Frostlight
// @supportURL   mailto:frostlight@users.noreply.github.com
// @match        http://3rdguide.com/web/teamnew/index
// @match        http://www.3rdguide.com/web/teamnew/index
// @match        https://3rdguide.com/web/teamnew/index
// @match        https://www.3rdguide.com/web/teamnew/index
// @grant        GM_addStyle
// ==/UserScript==

GM_addStyle (`
    /* Remove Floating Buttons */
    .sp-btns {
        display: none !important;
    }

    /* Fix Abyss Icons */
    .tgcol1 {
        display: flex;
    }
    .tgcol1 :nth-child(4) {
        display: none !important;
    }
    .tgcol2 {
        padding: 0 10px !important;
    }
`);
