/**
 * @interface
 */
network.IClusterOptions = function() {}

/**
 * @param {any} nodeOptions
 */
network.IClusterOptions.prototype.joinCondition = function(nodeOptions) {};

/**
 * @param {any} clusterOptions
 * @param {any} childNodesOptions
 * @param {any} childEdgesOptions
 */
network.IClusterOptions.prototype.processProperties = function(clusterOptions, childNodesOptions, childEdgesOptions) {}
/**
 * @type {any}
 */
network.IClusterOptions.prototype.clusterNodeProperties;

/**
 * @type {any}
 */
network.IClusterOptions.prototype.clusterEdgeProperties;