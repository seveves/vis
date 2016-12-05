/// <reference path="./interfaces/IData.d.ts" />
/// <reference path="./interfaces/IOptions.d.ts" />
/// <reference path="./interfaces/IPosition.d.ts" />
/// <reference path="./interfaces/IdType.d.ts" />

declare module network {

    class Network extends Network__Class { }
    /** Fake class which should be extended to avoid inheriting static properties */
    class Network__Class  { 
    
            /**
             * @constructor
             * @param {Element} container   The DOM element in which the Network will
             *                              be created. Normally a div element.
             * @param {network.IData} data The network data (nodes and edges).
             * @param {network.IOptions} options The network options.
             */
            constructor(container: Element, data: network.IData, options: network.IOptions);
    
            /**
             * Set options
             * @param {network.IOptions} options
             */
            setOptions(options: network.IOptions): void;
    
            /**
             * Set nodes and edges, and optionally options as well.
             *
             * @param {network.IData} data
             *
             */
            setData(data: network.IData): void;
    
            /**
             * Cleans up all bindings of the network, removing it fully from the memory IF the variable is set to null after calling this function.
             * var network = new vis.Network(..);
             * network.destroy();
             * network = null;
             * 
             */
            destroy(): void;
    
            /**
             * @param {string} width The new width.
             * @param {string} height The new height.
             */
            setSize(): void;
    
            /**
             * @param {network.IPosition} position 
             * @return {network.IPosition}
             */
            canvasToDOM(): network.IPosition;
    
            /**
             * @param {network.IPosition} position 
             * @return {network.IPosition}
             */
            DOMtoCanvas(): network.IPosition;
    
            /**
             * @param {network.IdType} nodeId
             * @return {network.IdType[]}
             */
            findNode(): network.IdType[];
    
            /**
             * @param {network.IdType} nodeId
             * @return {boolean}
             */
            isCluster(): boolean;
    
            /**
             * @param {network.IdType} nodeId
             * @param {network.IOpenClusterOptions2} options
             */
            openCluster(): void;
    
            /**
             * @param {network.IClusterOptions} options
             */
            cluster(): void;
    } 
    
}
