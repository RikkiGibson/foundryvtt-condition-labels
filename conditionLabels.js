// FoundryVTT Condition Labels
// Adds a label which shows the currently hovered condition in the token HUD.

Hooks.on('renderTokenHUD', onRenderTokenHUD);

function onRenderTokenHUD(_, $elem) {
    const label =
`<span id="current-status">
    &nbsp;
</span>`
    const $statusEffects = $elem.find('.status-effects');
    $statusEffects.prepend($(label));
    $statusEffects.mouseover((e) => {
        let title = e.target.title;
        if (title) {
            $("#current-status").html(title);
        }
    });
    $statusEffects.mouseleave(() => {
        $("#current-status").html('&nbsp;');
    });
}
