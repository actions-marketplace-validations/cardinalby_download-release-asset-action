// @ts-check

/**
 * @name env
 * @type {{ASSET_ID: string, TARGET_PATH: string}} env
 */

(async () => {
    const assetId = parseInt(env.ASSET_ID);
    assert(assetId, 'Invalid assetId value');

    const data = (await octokit.rest.repos.getReleaseAsset({
        headers: { Accept: "application/octet-stream" },
        owner: context.repo.owner,
        repo: context.repo.repo,
        asset_id: assetId
    })).data;
    await fs.ensureFile(env.TARGET_PATH);
    await fs.writeFile(env.TARGET_PATH, data);
})()