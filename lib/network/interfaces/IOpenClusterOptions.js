/**
 * @interface
 */
network.IOpenClusterOptions = function() {}

/**
 * @param {network.IPosition} clusterPosition
 * @param {Object.<string, network.IPosition>} containedNodesPositions
 */
network.IOpenClusterOptions.prototype.releaseFunction = function(clusterPosition, containedNodesPositions) {};
