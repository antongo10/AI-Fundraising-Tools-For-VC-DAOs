// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

import {ERC721} from "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import {Ownable} from "@openzeppelin/contracts/access/Ownable.sol";

contract ERC721Token is ERC721, Ownable {
    string private _base;

    constructor(string memory name_, string memory symbol_, string memory baseURI_) ERC721(name_, symbol_) Ownable(msg.sender) {
        _base = baseURI_;
    }

    function _baseURI() internal view override returns (string memory) {
        return _base;
    }

    function mintTo(address to, uint256 tokenId) external onlyOwner {
        _mint(to, tokenId);
    }
}